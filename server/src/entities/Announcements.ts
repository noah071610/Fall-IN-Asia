import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { MarketPosts } from './MarketPosts';
import { StudyPosts } from './StudyPosts';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'announcements' })
export class Announcements {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'bts',
    description: 'club key name for finding club as fast as possible',
    nullable: true,
  })
  @Column('varchar', { name: 'club', nullable: true })
  club: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'UserId ',
  })
  @Column()
  userId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'clubPost announcements',
    nullable: true,
  })
  @Column('int', { name: 'clubPostId', nullable: true })
  clubPostId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'marketPost announcements',
    nullable: true,
  })
  @Column('int', { name: 'marketPostId', nullable: true })
  marketPostId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'studyPost announcements',
    nullable: true,
  })
  @Column('int', { name: 'studyPostId', nullable: true })
  studyPostId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '新しいお知らせがあります',
    description: 'message to some user',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.announcements)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;

  @ManyToOne(() => ClubPosts, (clubPosts) => clubPosts.announcements, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'clubPostId' })
  clubPost: ClubPosts;

  @ManyToOne(() => MarketPosts, (marketPosts) => marketPosts.announcements, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'marketPostId' })
  marketPost: MarketPosts;

  @ManyToOne(() => StudyPosts, (studyPosts) => studyPosts.announcements, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'studyPostId' })
  studyPost: StudyPosts;
}
