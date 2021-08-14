import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Comments } from 'src/entities/Comments';
import { Repository } from 'typeorm';
import { SubComments } from 'src/entities/SubComments';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentCreateDto } from 'src/@comments/comments.dto';
import { CommentLike } from 'src/entities/CommentLike';
import { Notices } from 'src/entities/Notices';
import { Moments } from 'src/entities/Moments';
import { Stories } from 'src/entities/Stories';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comments)
    private CommentsRepository: Repository<Comments>,
    @InjectRepository(SubComments)
    private subCommentsRepository: Repository<SubComments>,
    @InjectRepository(CommentLike)
    private CommentLikeRepository: Repository<CommentLike>,
    @InjectRepository(Notices)
    private NoticesRepository: Repository<Notices>,
    @InjectRepository(Moments)
    private MomentsRepository: Repository<Moments>,
    @InjectRepository(Stories)
    private StoriesRepository: Repository<Stories>,
  ) {}

  async createComment(form: CommentCreateDto, userId: number) {
    const newComment = new Comments();
    newComment.content = form.content;
    newComment.user = <any>{ id: userId };
    if (form.momentId) {
      newComment.moment = <any>{ id: form.momentId };
      const moment = await this.MomentsRepository.findOne({
        relations: ['country', 'user'],
        where: { id: form.momentId },
      });
      await this.NoticesRepository.save({
        header: `${moment.country.name}/${moment.id}번모멘트/댓글`,
        code: moment.code,
        userId: userId,
        momentId: moment.id,
        content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
      });
      if (moment.user.id !== userId) {
        await this.NoticesRepository.save({
          header: `${moment.country.name}/${moment.id}번모멘트/댓글`,
          code: moment.code,
          userId: moment.user.id,
          momentId: moment.id,
          content: `${moment.content
            .slice(0, 30)
            .replace(/(<([^>]+)>)/gi, '')
            .replace(/&.*;/gi, '')
            .slice(0, 10)}... 에 댓글이 달렸습니다.`,
        });
      }
    } else {
      newComment.story = <any>{ id: form.storyId };
      const story = await this.StoriesRepository.findOne({
        relations: ['country', 'user'],
        where: { id: form.storyId },
      });
      await this.NoticesRepository.save({
        header: `${story.country.name}/${story.id}번연대기/댓글`,
        code: story.code,
        userId,
        storyId: story.id,
        content: `${form.content.slice(0, 10)}...을 작성했습니다.`,
      });
      if (story.user.id !== userId) {
        await this.NoticesRepository.save({
          header: `${story.country.name}/${story.id}번연대기/댓글`,
          code: story.code,
          userId: story.user.id,
          storyId: story.id,
          content: `${story.title.slice(0, 10)}... 에 댓글이 달렸습니다.`,
        });
      }
    }
    await this.CommentsRepository.save(newComment);
    return true;
  }

  async getComments(postId: number, postType: string) {
    const comments = this.CommentsRepository.createQueryBuilder('comments')
      .addSelect([
        'likedUser.id',
        'user.id',
        'user.icon',
        'user.name',
        'subComments_user.id',
        'subComments_user.icon',
        'subComments_user.name',
      ])
      .leftJoin('comments.likedUser', 'likedUser')
      .leftJoin('comments.user', 'user')
      .leftJoinAndSelect('comments.subComments', 'subComments')
      .leftJoin('subComments.user', 'subComments_user');

    if (postType === 'moment') {
      return await comments
        .where('comments.moment= :moment', { moment: postId })
        .orderBy({
          'comments.id': 'ASC',
          'subComments_user.id': 'ASC',
        })
        .getMany();
    } else if (postType === 'story') {
      return await comments
        .where('comments.story= :story', { story: postId })
        .orderBy({
          'comments.id': 'ASC',
          'subComments_user.id': 'ASC',
        })
        .getMany();
    }
  }

  async deleteComment(commentId: number) {
    await this.CommentsRepository.delete({ id: commentId });
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
