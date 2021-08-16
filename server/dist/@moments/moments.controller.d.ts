/// <reference types="multer-s3" />
import { MomentsService } from './moments.service';
import { MomentCreateRequestDto, MomentModifyRequestDto } from './moments.dto';
export declare class MomentsController {
    private readonly MomentsService;
    constructor(MomentsService: MomentsService);
    createPost(form: MomentCreateRequestDto, user: any, files: Express.MulterS3.File[]): Promise<{
        momentId: number;
    }>;
    editPost(form: MomentModifyRequestDto, files: Express.MulterS3.File[], user: any): Promise<{
        momentId: number;
    }>;
    deletePost(momentId: number): Promise<void>;
    saveImage(file: Express.MulterS3.File): Promise<void>;
    likePost(momentId: number, user: any): Promise<void>;
    dislikePost(momentId: number, user: any): Promise<void>;
    getLatestPosts(): Promise<import("../entities/Moments").Moments[]>;
    getOnePost(code: string, momentId: number, uuid: string): Promise<import("../entities/Moments").Moments>;
    getPosts(code: string, page: number, type: string, filter: string): Promise<import("../entities/Moments").Moments[]>;
}
