import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { Comments } from './Comments';
import { Gallery } from './Gallery';
import { LessonPosts } from './LessonPosts';
import { MarketPosts } from './MarketPosts';
import { SubComments } from './SubComments';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'k-heart', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { unique: true, name: 'googleId' })
  googleId: number;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => ClubPosts, (clubposts) => clubposts.users)
  clubposts: ClubPosts[];

  @OneToMany(() => LessonPosts, (lessonPosts) => lessonPosts.users)
  lessonPosts: LessonPosts[];

  @OneToMany(() => MarketPosts, (marketPosts) => marketPosts.users)
  marketPosts: MarketPosts[];

  @OneToMany(() => Gallery, (gallery) => gallery.users)
  gallery: Gallery[];

  @OneToMany(() => Comments, (comments) => comments.users)
  comments: Comments[];

  @OneToMany(() => SubComments, (subComments) => subComments.users)
  subComments: SubComments[];
}
