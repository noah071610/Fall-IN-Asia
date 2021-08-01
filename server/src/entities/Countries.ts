import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Moments } from './Moments';
import { Articles } from './Articles';
import { Stories } from './Stories';

@Entity({ schema: 'travelover', name: 'countries' })
export class Countries {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Index()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'KOR',
    description: 'country code for url or query by using English',
  })
  @Column('varchar', { name: 'code' })
  code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '태국',
    description: 'country name especially wrote down in korean Language  ',
  })
  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '동북아시아',
    description: 'continent each country',
  })
  @Column('enum', {
    name: 'continent',
    enum: ['동북아시아', '동남아시아', '남아시아'],
  })
  continent: '동북아시아' | '동남아시아' | '남아시아';

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'http://domain.com/uploads/239483294.jpg',
    description: 'image src for country introduce',
  })
  @Column('longtext', { name: 'image_src' })
  image_src: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'http://domain.com/uploads/239483294.jpg',
    description: 'flag src for country introduce',
  })
  @Column('longtext', { name: 'flag_src' })
  flag_src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @OneToMany(() => Moments, (moments) => moments.country)
  moments: Moments[];

  @OneToMany(() => Articles, (articles) => articles.country)
  articles: Articles[];

  @OneToMany(() => Stories, (stories) => stories.country)
  stories: Stories[];
}
