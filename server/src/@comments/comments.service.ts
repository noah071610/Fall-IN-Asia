import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Comments } from 'src/entities/Comments';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { SubComments } from 'src/entities/SubComments';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRequestDto } from 'src/dto/comment.request.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
    @InjectRepository(SubComments)
    private subCommentsRepository: Repository<SubComments>,
  ) {}

  async createComment(form: CommentRequestDto, userId: number) {
    const newComment = new Comments();
    newComment.content = form.content;
    newComment.user = <any>{ id: userId };
    if (form.mainPostId) {
      newComment.mainPost = <any>{ id: form.mainPostId };
    } else {
      newComment.story = <any>{ id: form.storyId };
    }
    await this.commentsRepository.save(newComment);
    return true;
  }

  async deleteComment(commentId: number) {
    await this.commentsRepository.delete({ id: commentId });
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
