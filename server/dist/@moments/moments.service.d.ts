/// <reference types="multer-s3" />
import { Repository } from 'typeorm';
import { Images } from 'src/entities/Images';
import { Notices } from 'src/entities/Notices';
import { Moments } from 'src/entities/Moments';
import { Countries } from 'src/entities/Countries';
import { MomentLike } from 'src/entities/MomentLike';
import { MomentCreateRequestDto, MomentModifyRequestDto } from './moments.dto';
export declare class MomentsService {
    private MomentsRepository;
    private CountriesRepository;
    private ImagesRepository;
    private MomentLikeRepository;
    private NoticesRepository;
    constructor(MomentsRepository: Repository<Moments>, CountriesRepository: Repository<Countries>, ImagesRepository: Repository<Images>, MomentLikeRepository: Repository<MomentLike>, NoticesRepository: Repository<Notices>);
    createPost(form: MomentCreateRequestDto, userId: number, files: Express.MulterS3.File[]): Promise<{
        momentId: number;
    }>;
    saveImage(file: Express.MulterS3.File): Promise<boolean>;
    getOnePost(momentId: number, code: string, uuid: string): Promise<Moments>;
    getLatestPosts(): Promise<Moments[]>;
    getFilterPosts(filter: string, code?: string, type?: string, page?: number): Promise<Moments[]>;
    getPosts(code?: string, page?: number, type?: string): Promise<Moments[]>;
    editPost(form: MomentModifyRequestDto, files: Express.MulterS3.File[], userId: number): Promise<{
        momentId: number;
    }>;
    likePost(momentId: number, userId: number): Promise<MomentLike>;
    dislikePost(momentId: number, userId: number): Promise<import("typeorm").DeleteResult>;
    deletePost(momentId: number): Promise<import("typeorm").DeleteResult>;
}
