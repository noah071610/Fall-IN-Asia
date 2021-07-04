import { PickType } from '@nestjs/swagger';
import { ClubPosts } from 'src/entities/ClubPosts';

export class ClubPostRequestDto extends PickType(ClubPosts, [
  'title',
  'content',
  'club',
] as const) {
  public userId: string;
}
