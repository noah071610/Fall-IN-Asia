import { Notices } from './Notices';
import { MomentLike } from './MomentLike';
import { Comments } from './Comments';
import { Countries } from './Countries';
import { Images } from './Images';
import { Users } from './Users';
export declare class Moments {
    id: number;
    code: string;
    hit: number;
    type: '한인 커뮤니티' | '여행정보 공유' | '사기 경보' | '동행자 모집';
    content: string;
    createdAt: Date;
    updatedAt: Date;
    notices: Notices[];
    images: Images[];
    likedUser: MomentLike[];
    comments: Comments[];
    country: Countries;
    user: Users;
}
