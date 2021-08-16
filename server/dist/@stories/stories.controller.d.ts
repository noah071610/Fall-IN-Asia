/// <reference types="multer-s3" />
import { StoriesService } from './stories.service';
import { StoryCreateDto, StoryEditDto } from 'src/@stories/stories.dto';
export declare class StoriesController {
    private readonly StoriesService;
    constructor(StoriesService: StoriesService);
    createPost(form: StoryCreateDto, user: any, file: Express.MulterS3.File): Promise<{
        storyId: number;
    }>;
    editPost(form: StoryEditDto, file: Express.MulterS3.File, user: any): Promise<{
        storyId: number;
    }>;
    deletePost(storyId: number): Promise<void>;
    saveImage(file: Express.MulterS3.File): Promise<string>;
    likePost(storyId: number, user: any): Promise<void>;
    dislikePost(storyId: number, user: any): Promise<void>;
    getPosts(code: string, page: number, filter: string): Promise<import("../entities/Stories").Stories[]>;
    getLatestPosts(): Promise<import("../entities/Stories").Stories[]>;
    getPopularPosts(code: string): Promise<any[]>;
    getSidePosts(storyId: number, userId: number): Promise<{
        prevPost: import("../entities/Stories").Stories;
        nextPost: import("../entities/Stories").Stories;
    }>;
    getOnePost(code: string, storyId: number, uuid: string): Promise<import("../entities/Stories").Stories>;
}
