import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubPosts } from 'src/entities/ClubPosts';
import { Comments } from 'src/entities/Comments';
import { Groups } from 'src/entities/Groups';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { SubComments } from 'src/entities/SubComments';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
    @InjectRepository(SubComments)
    private subCommentsRepository: Repository<SubComments>,
    @InjectRepository(ClubPosts)
    private clubPostsRepository: Repository<ClubPosts>,
    @InjectRepository(Groups)
    private groupsRepository: Repository<Groups>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

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

  async createSubComment(content: string, userId: number, commentId: number) {
    const newSubComment = new SubComments();
    newSubComment.content = content;
    newSubComment.user = <any>{ id: userId };
    newSubComment.comment = <any>{ id: commentId };
    return await this.subCommentsRepository.save(newSubComment);
  }

  async deleteSubComment(subCommentId: number) {
    await this.subCommentsRepository.delete({ id: subCommentId });
    return true;
  }
}
