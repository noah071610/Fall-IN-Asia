import { PickType } from '@nestjs/swagger';
import { ClubPosts } from 'src/entities/ClubPosts';

export class ClubPostConfirmDto extends ClubPosts {
  public userId: string;
  public password: string;
  public postId: string;
}
