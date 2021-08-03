import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
import { Moments } from './Moments';
import { Comments } from './Comments';
import { Stories } from './Stories';
import { MomentLike } from './MomentLike';
import { Notices } from './Notices';
import { SubComments } from './SubComments';
import { StoryLike } from './StoryLike';
import { Follow } from './Follow';
import { CommentLike } from './CommentLike';
import { Articles } from './Articles';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'travelover', name: 'users' })
export class Users {
  @Index()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ApiProperty({
    example: 394823049802,
    description: 'googleID',
  })
  @Column('int', {
    unique: true,
    select: false,
    name: 'googleId',
    nullable: true,
  })
  googleId: number | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'noah071610@naver.com',
    description: 'email',
  })
  @Column('varchar', { name: 'email', select: false, unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '장현수',
    description: 'name',
  })
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      '안녕하세요 여행을 너무 사랑하는 노아입니다. 일본과 태국 여행을 좋아합니다.',
    description: 'introduce',
  })
  @Column('varchar', { name: 'introduce' })
  introduce: string;

  @IsString()
  @ApiProperty({
    example: 'https://images.com/324324231',
    description: 'icon url',
  })
  @Column('varchar', {
    name: 'icon',
    default:
      'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png',
  })
  icon: string;

  @IsString()
  @ApiProperty({
    example: '320sd8f78f2300dsa',
    description: 'Password',
  })
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @IsBoolean()
  @ApiProperty({
    example: 1,
    description: 'admin',
  })
  @Column('boolean', { name: 'admin', select: false, default: false })
  admin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date | null;

  @OneToMany(() => Follow, (follow) => follow.following, {
    cascade: true,
  })
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.follower, {
    cascade: true,
  })
  followings: Follow[];

  @OneToMany(() => Moments, (moments) => moments.user, {
    cascade: true,
  })
  moments: Moments[];

  @OneToMany(() => Stories, (stories) => stories.user, {
    cascade: true,
  })
  stories: Stories[];

  @OneToMany(() => Articles, (articles) => articles.user, {
    cascade: true,
  })
  articles: Articles[];

  @OneToMany(() => Comments, (comments) => comments.user, {
    cascade: true,
  })
  comments: Comments[];

  @OneToMany(() => SubComments, (subComments) => subComments.user, {
    cascade: true,
  })
  subComments: SubComments[];

  @OneToMany(() => MomentLike, (momentLike) => momentLike.user, {
    cascade: true,
  })
  likeMoment: MomentLike[];

  @OneToMany(() => CommentLike, (commentLike) => commentLike.user, {
    cascade: true,
  })
  likeComment: CommentLike[];

  @OneToMany(() => StoryLike, (storyLike) => storyLike.user, {
    cascade: true,
  })
  likeStory: StoryLike[];

  @OneToMany(() => Notices, (notices) => notices.user, {
    cascade: true,
  })
  notices: Notices[];
}
