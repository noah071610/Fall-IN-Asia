import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Comments } from 'src/entities/Comments';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { SubComments } from 'src/entities/SubComments';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
    @InjectRepository(SubComments)
    private subCommentsRepository: Repository<SubComments>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createComment(content: string, userId: number, mainPostId: number) {
    const newComment = new Comments();
    newComment.content = content;
    newComment.user = <any>{ id: userId };
    newComment.mainPost = <any>{ id: mainPostId };
    await this.commentsRepository.save(newComment);
    return true;
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
    await this.subCommentsRepository.save(newSubComment);
    return;
  }

  async deleteSubComment(subCommentId: number) {
    await this.subCommentsRepository.delete({ id: subCommentId });
    return true;
  }
}
