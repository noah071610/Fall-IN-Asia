import { AuthNum } from 'src/entities/AuthNum';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { SocialProfileDto } from './auth.dto';
export declare class AuthService {
    private UserRepository;
    private AuthNumRepository;
    constructor(UserRepository: Repository<Users>, AuthNumRepository: Repository<AuthNum>);
    validateUser(email: string, password: string): Promise<{
        id: number;
        socialId: string;
        provider: string;
        email: string;
        name: string;
        introduce: string;
        icon: string;
        admin: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
        followers: import("../entities/Follow").Follow[];
        followings: import("../entities/Follow").Follow[];
        moments: import("../entities/Moments").Moments[];
        stories: import("../entities/Stories").Stories[];
        articles: import("../entities/Articles").Articles[];
        comments: import("../entities/Comments").Comments[];
        subComments: import("../entities/SubComments").SubComments[];
        likeMoment: import("../entities/MomentLike").MomentLike[];
        likeComment: import("../entities/CommentLike").CommentLike[];
        likeStory: import("../entities/StoryLike").StoryLike[];
        notices: import("../entities/Notices").Notices[];
    }>;
    validateSocialUser(profile: SocialProfileDto): Promise<Users>;
    checkPossibleEmail(email: string): Promise<number>;
}
