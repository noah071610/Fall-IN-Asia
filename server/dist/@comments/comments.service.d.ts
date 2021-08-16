import { Comments } from 'src/entities/Comments';
import { Repository } from 'typeorm';
import { SubComments } from 'src/entities/SubComments';
import { CommentCreateDto } from 'src/@comments/comments.dto';
import { CommentLike } from 'src/entities/CommentLike';
import { Notices } from 'src/entities/Notices';
import { Moments } from 'src/entities/Moments';
import { Stories } from 'src/entities/Stories';
export declare class CommentsService {
    private CommentsRepository;
    private subCommentsRepository;
    private CommentLikeRepository;
    private NoticesRepository;
    private MomentsRepository;
    private StoriesRepository;
    constructor(CommentsRepository: Repository<Comments>, subCommentsRepository: Repository<SubComments>, CommentLikeRepository: Repository<CommentLike>, NoticesRepository: Repository<Notices>, MomentsRepository: Repository<Moments>, StoriesRepository: Repository<Stories>);
    createComment(form: CommentCreateDto, userId: number): Promise<boolean>;
    getComments(postId: number, postType: string): Promise<Comments[]>;
    deleteComment(commentId: number): Promise<boolean>;
    createSubComment(content: string, userId: number, commentId: number): Promise<void>;
    deleteSubComment(subCommentId: number): Promise<boolean>;
    likeComment(commentId: number, userId: number): Promise<CommentLike>;
    dislikeComment(commentId: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
