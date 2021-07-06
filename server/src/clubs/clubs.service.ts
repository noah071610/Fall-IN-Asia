import {
  Injectable,
  NotFoundException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubPosts } from 'src/entities/ClubPosts';
import { Groups } from 'src/entities/Groups';
import { Repository } from 'typeorm';
import { ClubPostRequestDto } from './dto/clubPost.request.dto';
import bcrypt from 'bcrypt';
import { ClubPostConfirmDto } from './dto/clubPost.confirm.dto';
import { Users } from 'src/entities/Users';
import { ClubEditRequestDto } from './dto/clubEdit.request.dto';
@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(ClubPosts)
    private clubPostsRepository: Repository<ClubPosts>,
    @InjectRepository(Groups)
    private GroupsRepository: Repository<Groups>,
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async getOnePost(id: number, group: string) {
    const groupId = await this.GroupsRepository.findOne({
      where: { key_name: group },
      select: ['id'],
    });
    const post = await this.clubPostsRepository.findOne({
      where: {
        id,
        group: groupId.id,
      },
      relations: ['user'],
    });
    return post;
  }

  async test(data: any) {
    const post = await this.clubPostsRepository
      .createQueryBuilder('posts')
      .leftJoin('posts.group', 'group')
      .addSelect(['group.name', 'group.key'])
      .getOne();
    const user = await this.UsersRepository.createQueryBuilder('users')
      .leftJoin('users.comments', 'comments')
      .addSelect(['comments.content'])
      .getOne();
    return { post, user };
  }

  async getPreviewPosts() {
    const postCount = await this.clubPostsRepository
      .createQueryBuilder('posts')
      .select('posts.groupId')
      .addSelect('COUNT(*)', 'cnt')
      .groupBy('posts.groupId')
      .orderBy('cnt', 'DESC')
      .getMany();
    const topClubWithSixPosts = await Promise.all(
      postCount.map(async (v) => {
        const posts = await this.clubPostsRepository
          .createQueryBuilder('posts')
          .select('posts.id')
          .addSelect('posts.title')
          .where('posts.groupId= :groupId', { groupId: v.groupId })
          .orderBy('posts.id', 'DESC')
          .limit(6)
          .leftJoin('posts.user', 'users')
          .addSelect(['users.name'])
          .getRawMany();
        const group = await this.GroupsRepository.findOne({
          where: { id: v.groupId },
          select: ['group_name', 'key_name'],
        });

        return { ...group, posts };
      }),
    );

    return topClubWithSixPosts;
  }

  async getClubPosts(group: string) {
    const groupName = await this.GroupsRepository.findOne({
      where: { key_name: group },
      select: ['group_name', 'id'],
    });

    const posts = await this.clubPostsRepository
      .createQueryBuilder('posts')
      .where('posts.group= :groupId', { groupId: groupName.id })
      .leftJoinAndSelect('posts.user', 'user')
      .limit(10)
      .orderBy('posts.id', 'DESC')
      .getMany();
    return { name: groupName.group_name, posts };
  }

  async createPost(data: ClubPostRequestDto) {
    const newPost = new ClubPosts();
    newPost.groupId = data.groupId;
    newPost.title = data.title;
    newPost.content = data.content;
    newPost.group = <any>{ id: data.groupId };
    newPost.user = <any>{ id: data.userId };
    return await this.clubPostsRepository.save(newPost);
  }

  async eidtPost(data: ClubEditRequestDto) {
    const editedPost = await this.clubPostsRepository.update(
      { id: data.postId },
      { title: data.title, content: data.content },
    );

    return editedPost;
  }

  async comparePasswordForAuth(data: { password: string; userId: number }) {
    const user = await this.UsersRepository.findOne({
      where: { id: data.userId },
      select: ['password'],
    });
    const conparePassword = await bcrypt.compare(data.password, user.password);
    if (!conparePassword) {
      throw new UnauthorizedException('パスワードが違います。');
    }
    return true;
  }

  async deletePost(postId: number) {
    await this.clubPostsRepository.delete({ id: postId });
    return true;
  }

  async searchPostByPostId(postId: number) {
    const post = this.clubPostsRepository.findOne({
      where: { id: postId },
    });
    if (!post) {
      throw new NotFoundException(
        'ポストがありません、もう一度確認お願い致します。',
      );
    }
    return post;
  }
}
