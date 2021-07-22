import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

export class UserRequestDto extends PickType(Users, [
  'email',
  'name',
  'password',
] as const) {}
