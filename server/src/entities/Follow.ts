import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Stories } from './Stories';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'follow' })
export class Follow {
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
    description: 'followingId (Following)',
  })
  @Column()
  followingId: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'followerId (Follower)',
  })
  @Column()
  followerId: number;

  @ManyToOne(() => Users, (users) => users.likeStory, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'followingId' })
  following: Users;

  @ManyToOne(() => Stories, (stories) => stories.likedUser, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'followerId' })
  follower: Users;
}
