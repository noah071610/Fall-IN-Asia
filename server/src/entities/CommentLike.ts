import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comments } from './Comments';
import { Users } from './Users';

@Entity({ schema: 'fall-in-asia', name: 'commentLike' })
export class CommentLike {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'UserId (Like)',
  })
  @Column()
  userId: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'commentId (Liked)',
  })
  @Column()
  commentId: number;

  @ManyToOne(() => Users, (users) => users.likeComment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => Comments, (comments) => comments.likedUser, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment: Comments;
}
