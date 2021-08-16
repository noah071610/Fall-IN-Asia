/// <reference types="multer-s3" />
import { Images } from 'src/entities/Images';
import { Repository } from 'typeorm';
import { Countries } from 'src/entities/Countries';
import { ArticleCreateDto, ArticleEditDto } from 'src/@articles/articles.dto';
import { Articles } from 'src/entities/Articles';
import { Users } from 'src/entities/Users';
export declare class ArticlesService {
    private ArticlesRepository;
    private CountriesRepository;
    private ImagesRepository;
    private UsersRepository;
    constructor(ArticlesRepository: Repository<Articles>, CountriesRepository: Repository<Countries>, ImagesRepository: Repository<Images>, UsersRepository: Repository<Users>);
    createPost(form: ArticleCreateDto, userId: number, file: Express.MulterS3.File): Promise<{
        articleId: number;
    }>;
    saveImage(file: Express.MulterS3.File): Promise<string>;
    getOnePost(articleId: number): Promise<Articles>;
    getPopularPosts(code?: string): Promise<Articles[]>;
    getPosts(type?: string, page?: number): Promise<Articles[]>;
    editPost(form: ArticleEditDto, file: Express.MulterS3.File, userId: number): Promise<{
        articleId: number;
    }>;
    deletePost(articleId: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
