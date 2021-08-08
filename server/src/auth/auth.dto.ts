import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

export class SocialProfileDto extends PickType(Users, [
  'email',
  'name',
  'provider',
  'icon',
  'socialId',
] as const) {}
