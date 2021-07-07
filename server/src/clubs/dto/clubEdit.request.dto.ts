import { PickType } from '@nestjs/swagger';
import { ClubPosts } from 'src/entities/ClubPosts';
export class ClubEditRequestDto extends PickType(ClubPosts, [
  'title',
  'content',
]) {
  public postId: number;
}
