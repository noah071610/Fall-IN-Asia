import { PickType } from '@nestjs/swagger';
import { ClubPosts } from 'src/entities/ClubPosts';
import { ClubPostRequestDto } from './clubPost.request.dto';

export class ClubEditRequestDto extends ClubPostRequestDto {
  public postId: string;
}