import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
@Index(['email'])
export class AuthNum {
  @PrimaryColumn({ type: 'varchar' })
  email: string;

  @Column({ type: 'int' })
  authNum: number;
}
