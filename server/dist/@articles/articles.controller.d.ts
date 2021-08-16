/// <reference types="multer-s3" />
import { ArticlesService } from './articles.service';
import { ArticleCreateDto, ArticleEditDto } from 'src/@articles/articles.dto';
export declare class ArticlesController {
    private readonly ArticlesService;
    constructor(ArticlesService: ArticlesService);
    createPost(form: ArticleCreateDto, user: any, file: Express.MulterS3.File): Promise<{
        articleId: number;
    }>;
    editPost(form: ArticleEditDto, file: Express.MulterS3.File, user: any): Promise<{
        articleId: number;
    }>;
    deletePost(articleId: number, user: any): Promise<void>;
    saveImage(file: Express.MulterS3.File): Promise<string>;
    getPosts(page: number, type: string): Promise<import("../entities/Articles").Articles[]>;
    getPopularPosts(code: string): Promise<import("../entities/Articles").Articles[]>;
    getOnePost(articleId: number): Promise<import("../entities/Articles").Articles>;
}
