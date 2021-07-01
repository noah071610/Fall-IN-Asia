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
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'k-heart', name: 'clubPosts' })
export class ClubPosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'hit' })
  hit: string;

  @Column('varchar', { name: 'club', length: 20 })
  club: string;

  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => Images, (images) => images.clubposts)
  images: Images[];

  @ManyToOne(() => Users, (users) => users.clubposts)
  users: Users[];
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  userId: Users;
}
