import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'groups' })
export class Groups {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'group_name', length: 20 })
  group_name: string;

  @Column('varchar', { name: 'key_name', length: 20 })
  key_name: string;

  @Column('enum', {
    name: 'gender',
    enum: ['male', 'female', 'other'],
  })
  gender: 'male' | 'female' | 'other';

  @Column('int', { name: 'number' })
  number: number;

  @Column('varchar', { name: 'image' })
  image: string;

  @Column('int', { name: 'goodwell', default: 0 })
  goodwell: number;

  @Column('int', { name: 'handsome', default: 0 })
  handsome: number;

  @Column('int', { name: 'pretty', default: 0 })
  pretty: number;

  @Column('int', { name: 'cute', default: 0 })
  cute: number;

  @Column('int', { name: 'beautiful', default: 0 })
  beautiful: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Users, (users) => users.fan)
  user: Users[];

  @OneToMany(() => ClubPosts, (clubPosts) => clubPosts.group)
  clubPosts: ClubPosts[];
}
