import { PickType } from '@nestjs/swagger';
import { MainPosts } from 'src/entities/MainPosts';

export class MainPostRequestDto extends PickType(MainPosts, [
  'code',
  'content',
  'type',
] as const) {}
