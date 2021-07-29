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
import { Moments } from './Moments';
import { Stories } from './Stories';
import { VisitCountry } from './VisitCountry';

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
  @Column('longtext', { name: 'image_src' })
  image_src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => VisitCountry, (visitCountry) => visitCountry.images, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'visit_country', referencedColumnName: 'id' }])
  visit_country: VisitCountry;

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
}
