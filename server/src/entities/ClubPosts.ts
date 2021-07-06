import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Groups } from './Groups';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'clubPosts' })
export class ClubPosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'key_name' })
  key_name: string;

  @Column('int', { name: 'hit', default: 0 })
  hit: number;

  @Column('varchar', { name: 'title', length: 100 })
  title: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Groups, (groups) => groups.clubPosts)
  @JoinColumn({ name: 'group' })
  group: Groups;

  @ManyToOne(() => Users, (users) => users.clubPosts)
  @JoinColumn({ name: 'user' })
  user: Users;
}
