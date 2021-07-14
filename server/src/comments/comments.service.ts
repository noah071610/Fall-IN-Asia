import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubPosts } from 'src/entities/ClubPosts';
import { Comments } from 'src/entities/Comments';
import { Groups } from 'src/entities/Groups';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
    @InjectRepository(ClubPosts)
    private clubPostsRepository: Repository<ClubPosts>,
    @InjectRepository(Groups)
    private groupsRepository: Repository<Groups>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getcomments(group: string) {
    // const groupName = await this.groupsRepository.findOne({
    //   where: { key_name: group },
    //   select: ['group_name', 'id'],
    // });
    // const posts = await this.commentsRepository.findAndCount({
    //   where: { key_name: group },
    //   relations: ['user'],
    //   skip: (page - 1) * 10,
    //   take: 10,
    //   order: { id: 'DESC' },
    // });
    // return { name: groupName.group_name, posts };
  }

  async createComment(content: string, userId: number, postId: number) {
    const newComment = new Comments();
    newComment.content = content;
    newComment.user = <any>{ id: userId };
    newComment.post = <any>{ id: postId };
    return await this.commentsRepository.save(newComment);
  }

  async deleteComment(commentId: number) {
    await this.commentsRepository.delete({ id: commentId });
    return true;
  }

  async comparePasswordForAuth(password: string, userId: number) {
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      select: ['password'],
    });
    const conparePassword = await bcrypt.compare(password, user.password);
    if (!conparePassword) {
      throw new UnauthorizedException('パスワードが違います。');
    }
    return true;
  }
}
