import { Comments } from './Comments';
import { Moments } from './Moments';
import { Stories } from './Stories';
import { Users } from './Users';
export declare class Notices {
    id: number;
    code: string;
    userId: number;
    momentId: number;
    storyId: number;
    commentId: number;
    header: string;
    content: string;
    readAt: Date;
    createdAt: Date;
    updatedAt: Date;
    user: Users;
    moment: Moments;
    story: Stories;
    comment: Comments;
}
