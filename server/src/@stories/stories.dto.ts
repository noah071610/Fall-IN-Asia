import { PickType } from '@nestjs/swagger';
import { Stories } from 'src/entities/Stories';

export class StoryCreateDto extends PickType(Stories, [
  'content',
  'title',
  'region',
  'code',
  'lat',
  'lng',
] as const) {}

export class StoryEditDto extends StoryCreateDto {
  storyId: string;
}
