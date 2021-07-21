import { PickType } from '@nestjs/swagger';
import { ClubPosts } from 'src/entities/MainPosts';
export class ClubEditRequestDto extends PickType(ClubPosts, [
  'title',
  'content',
]) {
  public postId: number;
}
