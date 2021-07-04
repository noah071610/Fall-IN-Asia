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

  async getOnePost(id: string, group: string) {
    const post = await this.clubPostsRepository.findOne({
      where: {
        id: parseInt(id),
        club: group,
      },
      relations: ['UserId'],
    });
    return post;
  }

  async getClubPostsAndNameForClub(club: string) {
    const posts = await this.clubPostsRepository.find({
      where: { club },
      order: { id: 'DESC' },
      relations: ['UserId'],
      take: 10,
    });
    const group = await this.GroupsRepository.findOne({
      where: { group: club },
      select: ['name'],
    });
    return { name: group.name, posts };
  }

  async createPost(data: ClubPostRequestDto) {
    const newPost = await this.clubPostsRepository.save({
      title: data.title,
      content: data.content,
      club: data.club,
      hit: 0,
      UserId: parseInt(data.userId),
    });

    return newPost;
  }

  async comparePasswordForAuth(data: { password: string; userId: string }) {
    const user = await this.UsersRepository.findOne({
      where: { id: parseInt(data.userId) },
      select: ['password'],
    });
    const conparePassword = await bcrypt.compare(data.password, user.password);
    if (!conparePassword) {
      throw new UnauthorizedException('パスワードが違います。');
    }
    return true;
  }

  async deletePost(data: ClubPostConfirmDto) {
    await this.clubPostsRepository.delete({ id: parseInt(data.postId) });
    return true;
  }

  async editPost(data: ClubPostConfirmDto) {
    const postForEdit = this.clubPostsRepository.findOne({
      where: { id: parseInt(data.postId) },
    });
    if (!postForEdit) {
      throw new NotFoundException(
        'ポストがありません、もう一度確認お願い致します。',
      );
    }
    return postForEdit;
  }
}
