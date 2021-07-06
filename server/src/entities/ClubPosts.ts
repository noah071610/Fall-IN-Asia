import { type } from 'src/ormconfig';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Groups } from './Groups';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'clubPosts' })
export class ClubPosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'groupId' })
  groupId: number;

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

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => Images, (images) => images.clubPost)
  images: Images[];

  @ManyToOne(() => Groups, (groups) => groups.clubPosts)
  @JoinColumn({ name: 'group' })
  group: Groups;

  @ManyToOne(() => Users, (users) => users.clubPosts)
  @JoinColumn({ name: 'user' })
  user: Users;
}
