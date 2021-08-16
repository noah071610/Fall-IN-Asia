import { Users } from './Users';
export declare class Follow {
    id: number;
    followingId: number;
    followerId: number;
    following: Users;
    follower: Users;
}
