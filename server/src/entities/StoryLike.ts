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

@Entity({ schema: 'travelover', name: 'storyLike' })
export class StoryLike {
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
    description: 'storyId (Liked)',
  })
  @Column()
  storyId: number;

  @ManyToOne(() => Users, (users) => users.likeStory, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => Stories, (stories) => stories.likedUser, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'storyId' })
  story: Stories;
}
