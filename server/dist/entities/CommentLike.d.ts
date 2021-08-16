import { Comments } from './Comments';
import { Users } from './Users';
export declare class CommentLike {
    id: number;
    userId: number;
    commentId: number;
    user: Users;
    comment: Comments;
}
