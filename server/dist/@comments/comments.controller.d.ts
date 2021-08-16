import { CommentCreateDto } from 'src/@comments/comments.dto';
import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly CommentService;
    constructor(CommentService: CommentsService);
    getComments(postId: number, postType: string): Promise<import("../entities/Comments").Comments[]>;
    createComment(form: CommentCreateDto, user: any): Promise<boolean>;
    deleteComment(commentId: number): Promise<void>;
    createSubComment(form: CommentCreateDto, user: any): Promise<void>;
    deleteSubComment(subCommentId: number): Promise<void>;
    likeComment(commentId: number, user: any): Promise<void>;
    dislikeComment(commentId: number, user: any): Promise<void>;
}
