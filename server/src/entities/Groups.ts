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

  @Column('varchar', { name: 'image' })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Users, (users) => users.fan)
  user: Users[];

  @OneToMany(() => ClubPosts, (clubPosts) => clubPosts.group)
  clubPosts: ClubPosts[];
}
