import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { Comments } from './Comments';
import { Gallery } from './Gallery';
import { Groups } from './Groups';
import { StudyPosts } from './StudyPosts';
import { MarketPosts } from './MarketPosts';
import { Participate } from './Participate';
import { ClubPostLike } from './ClubPostLike';

@Index('email', ['email'], { unique: true })
@Entity({ schema: 'k_heart', name: 'users' })
export class Users {
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
    example: '320sd8f78f2300dsa',
    description: 'Password',
  })
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '4',
    description: 'rate each user',
  })
  @Column('float', { name: 'rate', default: 0 })
  rate: number;

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

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToOne(() => Groups, (groups) => groups.user)
  @JoinColumn([{ name: 'fan', referencedColumnName: 'id' }])
  fan: Groups;

  @OneToMany(() => StudyPosts, (studyPosts) => studyPosts.leaderUser, {
    cascade: true,
  })
  leadPosts: StudyPosts[];

  @OneToMany(() => ClubPosts, (clubposts) => clubposts.user, {
    cascade: true,
  })
  clubPosts: ClubPosts[];

  @OneToMany(() => MarketPosts, (marketPosts) => marketPosts.user, {
    cascade: true,
  })
  marketPosts: MarketPosts[];

  @OneToMany(() => Gallery, (gallery) => gallery.user, {
    cascade: true,
  })
  gallerys: Gallery[];

  @OneToMany(() => Comments, (comments) => comments.user, {
    cascade: true,
  })
  comments: Comments[];

  @OneToMany(() => Participate, (participate) => participate.user, {
    cascade: true,
  })
  participates: Participate[];

  @OneToMany(() => ClubPostLike, (clubPostLike) => clubPostLike.user, {
    cascade: true,
  })
  likeClubPost: ClubPostLike[];
}
