import { Notices } from './Notices';
import { Comments } from './Comments';
import { Countries } from './Countries';
import { Images } from './Images';
import { StoryLike } from './StoryLike';
import { Users } from './Users';
export declare class Stories {
    id: number;
    code: string;
    region: string;
    lat: number;
    lng: number;
    thumbnail: string;
    hit: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    notices: Notices[];
    images: Images[];
    likedUser: StoryLike[];
    comments: Comments[];
    country: Countries;
    user: Users;
}
