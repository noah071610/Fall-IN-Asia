import { Stories } from './Stories';
import { Users } from './Users';
export declare class StoryLike {
    id: number;
    userId: number;
    storyId: number;
    user: Users;
    story: Stories;
}
