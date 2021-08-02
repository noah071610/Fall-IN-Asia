import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Comments } from 'src/entities/Comments';
import { Repository } from 'typeorm';
import { SubComments } from 'src/entities/SubComments';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRequestDto } from 'src/dto/comment.request.dto';
import { CommentLike } from 'src/entities/CommentLike';
import { Notices } from 'src/entities/Notices';
import { Moments } from 'src/entities/Moments';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private commentsRepository: Repository<Comments>,
    @InjectRepository(SubComments)
    private subCommentsRepository: Repository<SubComments>,
    @InjectRepository(CommentLike)
    private CommentLikeRepository: Repository<CommentLike>,
    @InjectRepository(Notices)
    private NoticesRepository: Repository<Notices>,
    @InjectRepository(Moments)
    private MomentsRepository: Repository<Moments>,
  ) {}

  async createComment(form: CommentRequestDto, userId: number) {
    const moment = await this.MomentsRepository.findOne({
      where: { id: form.momentId },
    });
    if (moment) {
      throw new NotFoundException('모멘트를 찾지 못했습니다.');
    }
    const newComment = new Comments();
    newComment.content = form.content;
    newComment.user = <any>{ id: userId };
    if (form.momentId) {
      newComment.moment = <any>{ id: form.momentId };
    } else {
      newComment.story = <any>{ id: form.storyId };
    }
    await this.commentsRepository.save(newComment);
    await this.NoticesRepository.save({
      header: `${moment.code}/${moment.id}번모멘트/댓글`,
      code: moment.code,
      userId: userId,
      momentId: moment.id,
      content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
    });
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

  async likeComment(commentId: number, userId: number) {
    if (!commentId) {
      throw new NotFoundException('댓글을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    const newCommentLike = new CommentLike();
    newCommentLike.userId = userId;
    newCommentLike.commentId = commentId;
    return await this.CommentLikeRepository.save(newCommentLike);
  }

  async dislikeComment(commentId: number, userId: number) {
    if (!commentId) {
      throw new NotFoundException('댓글을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    return await this.CommentLikeRepository.delete({ commentId, userId });
  }
}
