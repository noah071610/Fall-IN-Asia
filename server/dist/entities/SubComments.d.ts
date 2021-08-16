import { Comments } from './Comments';
import { Users } from './Users';
export declare class SubComments {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    comment: Comments;
    user: Users;
}
