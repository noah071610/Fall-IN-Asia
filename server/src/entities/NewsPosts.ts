import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'k_heart', name: 'newsPosts' })
export class NewsPosts {
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
  @Column('varchar', { name: 'image' })
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ユーザーが作成したテキスト…',
    description: 'title for post',
  })
  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ユーザーが作成したテキスト…',
    description: 'content in the post',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
