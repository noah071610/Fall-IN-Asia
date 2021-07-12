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
import { ClubPosts } from './ClubPosts';
import { MarketPosts } from './MarketPosts';
import { StudyPosts } from './StudyPosts';

@Entity({ schema: 'k_heart', name: 'images' })
export class Images {
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
    example: 'http://domain.com/uploads/239483294.jpg',
    description: 'image src',
  })
  @Column('varchar', { name: 'src' })
  src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => MarketPosts, (marketPosts) => marketPosts.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'marketPost', referencedColumnName: 'id' }])
  marketPost: MarketPosts;

  @ManyToOne(() => ClubPosts, (clubPosts) => clubPosts.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'clubPost', referencedColumnName: 'id' }])
  clubPost: ClubPosts;

  @ManyToOne(() => StudyPosts, (studyPosts) => studyPosts.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'studyPost', referencedColumnName: 'id' }])
  studyPost: StudyPosts;
}
