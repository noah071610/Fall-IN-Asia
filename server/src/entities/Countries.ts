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
import { MainPosts } from './MainPosts';

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
    enum: [
      '아시아',
      '유라시아',
      '중동',
      '아프리카',
      '북아메리카',
      '남아메리카',
      '유럽',
      '오세아니아',
    ],
  })
  continent:
    | '아시아'
    | '유라시아'
    | '중동'
    | '아프리카'
    | '북아메리카'
    | '남아메리카'
    | '유럽'
    | '오세아니아';

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

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MainPosts, (mainPosts) => mainPosts.country)
  mainPosts: MainPosts[];
}
