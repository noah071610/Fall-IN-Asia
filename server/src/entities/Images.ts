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
import { Articles } from './Articles';
import { Moments } from './Moments';
import { Stories } from './Stories';

@Entity({ schema: 'fall-in-asia', name: 'images' })
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
  @Column('longtext', { name: 'image_src' })
  image_src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @ManyToOne(() => Stories, (stories) => stories.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'story', referencedColumnName: 'id' }])
  story: Stories;

  @ManyToOne(() => Moments, (moments) => moments.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'moment', referencedColumnName: 'id' }])
  moment: Moments;

  @ManyToOne(() => Articles, (articles) => articles.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'article', referencedColumnName: 'id' }])
  article: Articles;
}
