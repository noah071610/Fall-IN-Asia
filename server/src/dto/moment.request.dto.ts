import { PickType } from '@nestjs/swagger';
import { Moments } from 'src/entities/Moments';

export class MomentCreateRequestDto extends PickType(Moments, [
  'code',
  'content',
  'type',
] as const) {}

export class MomentModifyRequestDto extends PickType(Moments, [
  'code',
  'content',
] as const) {
  momentId: string;
}
