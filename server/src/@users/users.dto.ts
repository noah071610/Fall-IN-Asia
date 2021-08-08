import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

export class UserSignUpDto extends PickType(Users, [
  'email',
  'name',
  'password',
] as const) {
  authNum: string;
}
