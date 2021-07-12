import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StudyPosts } from './StudyPosts';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'participate' })
export class Participate {
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
    description: 'UserId (Participant)',
  })
  @Column()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'StudyPostId (Lesson or Korea study)',
  })
  @Column()
  studyPostId: number;

  @ManyToOne(() => Users, (users) => users.participates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => StudyPosts, (studyPosts) => studyPosts.participates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'studyPostId' })
  studyPost: StudyPosts;
}
