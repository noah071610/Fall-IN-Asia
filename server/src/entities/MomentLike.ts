import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Moments } from './Moments';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'momentLike' })
export class MomentLike {
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
    description: 'momentId (Liked)',
  })
  @Column()
  momentId: number;

  @ManyToOne(() => Users, (users) => users.likeMoment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => Moments, (moments) => moments.likedUser, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'momentId' })
  moment: Moments;
}
