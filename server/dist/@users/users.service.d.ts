/// <reference types="multer-s3" />
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import { Follow } from 'src/entities/Follow';
import { Notices } from 'src/entities/Notices';
import { AuthNum } from 'src/entities/AuthNum';
export declare class UsersService {
    private UserRepository;
    private FollowRepository;
    private NoticesRepository;
    private AuthNumRepository;
    constructor(UserRepository: Repository<Users>, FollowRepository: Repository<Follow>, NoticesRepository: Repository<Notices>, AuthNumRepository: Repository<AuthNum>);
    findUserInfoByEmail(email: string): Promise<Users>;
    getUserInfoById(userId: number): Promise<Users>;
    signUp(email: string, name: string, password: string, authNum: string): Promise<boolean>;
    addUserIcon(userId: number, file: Express.MulterS3.File): Promise<Users>;
    deleteUserIcon(userId: number): Promise<Users>;
    changeUserInfo(userId: number, form: any): Promise<Users>;
    confirmPassword(userId: number, password: string): Promise<boolean>;
    changeUserPassword(userId: number, newPassword: string): Promise<Users>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
    followUser(followingId: number, userId: number): Promise<Follow>;
    unfollowUser(followingId: number, userId: number): Promise<import("typeorm").DeleteResult>;
    readNotice(userId: number): Promise<boolean>;
    deleteNotice(noticeId: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
