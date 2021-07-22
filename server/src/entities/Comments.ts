import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MainPosts } from './MainPosts';
import { SubComments } from './SubComments';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'comments' })
export class Comments {
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
    example: '코멘트 감사합니다~ ',
    description: 'subcomment on the comment',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SubComments, (subComments) => subComments.comment, {
    cascade: true,
  })
  subComments: SubComments[];

  @ManyToOne(() => Users, (users) => users.comments)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;

  @ManyToOne(() => MainPosts, (mainPosts) => mainPosts.comments)
  @JoinColumn([{ name: 'post', referencedColumnName: 'id' }])
  mainPost: MainPosts;
}
