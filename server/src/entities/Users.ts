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
import { MainPosts } from './MainPosts';
import { Comments } from './Comments';
import { Stories } from './Stories';
import { MainPostLike } from './MainPostsLike';
import { Announcements } from './Announcements';
import { SubComments } from './SubComments';
import { StoryLike } from './StoryLike';

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
  @Column('int', { unique: true, name: 'googleId', nullable: true })
  googleId: number | null;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'noah071610@naver.com',
    description: 'email',
  })
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Noah',
    description: 'name',
  })
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @IsString()
  @ApiProperty({
    example: 'https://images.com/324324231',
    description: 'iamge URL',
  })
  @Column('varchar', {
    name: 'icon',
    default:
      'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png',
  })
  icon: string;

  @IsString()
  @ApiProperty({
    example: '320sd8f78f2300dsa (hash key)',
    description: 'Password',
  })
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @IsBoolean()
  @ApiProperty({
    example: 1,
    description: 'admin (boolean data type)',
  })
  @Column('boolean', { name: 'admin', select: false, default: false })
  admin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn({ select: false })
  deletedAt: Date | null;

  @OneToMany(() => MainPosts, (mainposts) => mainposts.user, {
    cascade: true,
  })
  mainPosts: MainPosts[];

  @OneToMany(() => Stories, (stories) => stories.user, {
    cascade: true,
  })
  stories: Stories[];

  @OneToMany(() => Comments, (comments) => comments.user, {
    cascade: true,
  })
  comments: Comments[];

  @OneToMany(() => SubComments, (subComments) => subComments.user, {
    cascade: true,
  })
  subComments: SubComments[];

  @OneToMany(() => MainPostLike, (mainPostLike) => mainPostLike.user, {
    cascade: true,
  })
  likeMainPost: MainPostLike[];

  @OneToMany(() => StoryLike, (storyLike) => storyLike.user, {
    cascade: true,
  })
  likeStory: StoryLike[];

  @OneToMany(() => Announcements, (announcements) => announcements.user, {
    cascade: true,
  })
  announcements: Announcements[];
}
