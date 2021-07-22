import { PickType } from '@nestjs/swagger';
import { Comments } from 'src/entities/Comments';

export class CommentRequestDto extends PickType(Comments, [
  'content',
] as const) {
  mainPostId: number;
  commentId: number;
}
