import { PickType } from '@nestjs/swagger';
import { Articles } from 'src/entities/Articles';

export class ArticleCreateDto extends PickType(Articles, [
  'content',
  'title',
  'region',
  'lat',
  'type',
  'lng',
] as const) {
  ranking?: string;
  label?: string;
  code: string;
}

export class ArticleEditDto extends ArticleCreateDto {
  articleId: string;
}
