import { Notices } from './Notices';
import { Moments } from './Moments';
import { Stories } from './Stories';
import { SubComments } from './SubComments';
import { Users } from './Users';
import { CommentLike } from './CommentLike';
export declare class Comments {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    subComments: SubComments[];
    notices: Notices[];
    likedUser: CommentLike[];
    user: Users;
    moment: Moments;
    story: Stories;
}
