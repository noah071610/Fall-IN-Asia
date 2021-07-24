import { PickType } from '@nestjs/swagger';
import { Stories } from 'src/entities/Stories';

export class StoryRequestDto extends PickType(Stories, [
  'content',
  'title',
  'region',
  'code',
] as const) {}
