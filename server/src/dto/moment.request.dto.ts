import { PickType } from '@nestjs/swagger';
import { Moments } from 'src/entities/Moments';

export class MomentRequestDto extends PickType(Moments, [
  'code',
  'content',
  'type',
] as const) {}
