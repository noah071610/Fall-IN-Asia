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
import { MainPosts } from './MainPosts';
import { MarketPosts } from './MarketPosts';

@Entity({ schema: 'travelover', name: 'images' })
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
  @Column('varchar', { name: 'image_src' })
  image_src: string;

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

  @ManyToOne(() => MainPosts, (mainPosts) => mainPosts.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mainPost', referencedColumnName: 'id' }])
  mainPost: MainPosts;
}
