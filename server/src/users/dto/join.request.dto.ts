import { PickType } from '@nestjs/swagger';
import { Users } from 'src/entities/Users';

export class JoinRequestDto extends PickType(Users, [
  'googleId',
  'email',
  'name',
  'password',
] as const) {
  public googleId: number;

  public email: string;

  public name: string;

  public password: string;
}
