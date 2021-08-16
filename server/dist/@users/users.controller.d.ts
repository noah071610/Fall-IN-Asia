/// <reference types="multer-s3" />
import { Request, Response } from 'express';
import { UserSignUpDto } from 'src/@users/users.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserInfo(req: any, user: any): any;
    getUserInfoById(userId: number): Promise<import("../entities/Users").Users>;
    signUp(data: UserSignUpDto): Promise<boolean>;
    logIn(user: any): Promise<import("../entities/Users").Users>;
    logOut(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    addUserIcon(user: any, file: Express.MulterS3.File): Promise<import("../entities/Users").Users>;
    deleteUserIcon(user: any): Promise<import("../entities/Users").Users>;
    changeUserInfo(form: any, user: any): Promise<import("../entities/Users").Users>;
    changeUserPassword(req: Request, res: Response, form: any, user: any): Promise<boolean>;
    readNotice(user: any): Promise<import("../entities/Users").Users>;
    deleteNotice(noticeId: number, user: any): Promise<import("../entities/Users").Users>;
    withdrawalUser(req: Request, res: Response, form: any, user: any): Promise<boolean>;
    followUser(followingId: number, user: any): Promise<import("../entities/Follow").Follow>;
    unfollowUser(followingId: number, user: any): Promise<import("typeorm").DeleteResult>;
}
