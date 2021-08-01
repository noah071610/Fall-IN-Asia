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
import { Comments } from './Comments';
import { Moments } from './Moments';
import { Stories } from './Stories';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'notice' })
export class Notices {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ApiProperty({
    example: 'KOR',
    description: 'country code',
    nullable: true,
  })
  @Column('varchar', { name: 'code', nullable: true })
  code: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'user id (not null)',
  })
  @Column()
  userId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'moment notices',
    nullable: true,
  })
  @Column('int', { name: 'momentId', nullable: true })
  momentId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'story notices',
    nullable: true,
  })
  @Column('int', { name: 'storyId', nullable: true })
  storyId: number;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'comment notices',
    nullable: true,
  })
  @Column('int', { name: 'commentId', nullable: true })
  commentId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '헝가리/유학/모멘트',
    description: 'notice header ',
  })
  @Column('varchar', { name: 'header' })
  header: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '新しいお知らせがあります',
    description: 'notice content',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.notices, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  user: Users;

  @ManyToOne(() => Moments, (moments) => moments.notices, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'momentId' })
  moment: Moments;

  @ManyToOne(() => Stories, (stories) => stories.notices, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'storyId' })
  story: Stories;

  @ManyToOne(() => Comments, (comments) => comments.notices, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'commentId' })
  comment: Comments;
}
