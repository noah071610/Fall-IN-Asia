import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity({ schema: 'k-heart', name: 'groups' })
export class Groups {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'group' })
  group: string;

  @Column('enum', {
    name: 'gender',
    enum: ['male', 'female', 'other'],
  })
  gender: 'male' | 'female' | 'other';

  @Column('int', { name: 'number' })
  number: number;

  @Column('varchar', { name: 'image' })
  image: string;

  @Column('boolean', { name: 'isNew' })
  isNew: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Users, (users) => users.groups)
  users: Users[];
}
