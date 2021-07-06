import { PickType } from '@nestjs/swagger';
import { ClubPosts } from 'src/entities/ClubPosts';

export class ClubPostRequestDto extends PickType(ClubPosts, [
  'title',
  'content',
] as const) {
  public groupId: number;
  public userId: number;
  public key_name: string;
}
