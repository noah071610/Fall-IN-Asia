/// <reference types="multer-s3" />
import { Images } from 'src/entities/Images';
import { Stories } from 'src/entities/Stories';
import { Repository } from 'typeorm';
import { Notices } from 'src/entities/Notices';
import { Countries } from 'src/entities/Countries';
import { StoryLike } from 'src/entities/StoryLike';
import { StoryCreateDto, StoryEditDto } from 'src/@stories/stories.dto';
export declare class StoriesService {
    private StoriesRepository;
    private CountriesRepository;
    private ImagesRepository;
    private StoryLikeRepository;
    private NoticesRepository;
    constructor(StoriesRepository: Repository<Stories>, CountriesRepository: Repository<Countries>, ImagesRepository: Repository<Images>, StoryLikeRepository: Repository<StoryLike>, NoticesRepository: Repository<Notices>);
    createPost(form: StoryCreateDto, userId: number, file: Express.MulterS3.File): Promise<{
        storyId: number;
    }>;
    saveImage(file: Express.MulterS3.File): Promise<string>;
    getSidePosts(storyId: number, userId: number): Promise<{
        prevPost: Stories;
        nextPost: Stories;
    }>;
    getOnePost(storyId: number, code: string, uuid: string): Promise<Stories>;
    getLatestPosts(): Promise<Stories[]>;
    getFilterPosts(filter: string, code?: string, page?: number): Promise<Stories[]>;
    getPopularPosts(code?: string): Promise<any[]>;
    getPosts(code?: string, page?: number): Promise<Stories[]>;
    editPost(form: StoryEditDto, file: Express.MulterS3.File, userId: number): Promise<{
        storyId: number;
    }>;
    likePost(storyId: number, userId: number): Promise<StoryLike>;
    dislikePost(storyId: number, userId: number): Promise<import("typeorm").DeleteResult>;
    deletePost(storyId: number): Promise<import("typeorm").DeleteResult>;
}
