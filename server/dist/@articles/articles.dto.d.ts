import { Articles } from 'src/entities/Articles';
declare const ArticleCreateDto_base: import("@nestjs/common").Type<Pick<Articles, "content" | "type" | "title" | "region" | "lat" | "lng">>;
export declare class ArticleCreateDto extends ArticleCreateDto_base {
    ranking?: string;
    label?: string;
    code: string;
}
export declare class ArticleEditDto extends ArticleCreateDto {
    articleId: string;
}
export {};
