import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MainPosts } from './MainPosts';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'mainPostLike' })
export class MainPostLike {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'UserId (Like)',
  })
  @Column()
  userId: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'mainPostId (Liked)',
  })
  @Column()
  mainPostId: number;

  @ManyToOne(() => Users, (users) => users.likeMainPost, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => MainPosts, (mainPosts) => mainPosts.likedUser, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'mainPostId' })
  mainPost: MainPosts;
}
