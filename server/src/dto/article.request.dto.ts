import { PickType } from '@nestjs/swagger';
import { Articles } from 'src/entities/Articles';

export class ArticleRequestDto extends PickType(Articles, [
  'content',
  'title',
  'region',
  'lat',
  'type',
  'lng',
] as const) {
  id?: string;
  ranking?: string;
  label?: string;
  code: string;
}
