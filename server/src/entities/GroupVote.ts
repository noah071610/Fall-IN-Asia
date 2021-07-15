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
import { Groups } from './Groups';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'groupVote' })
export class GroupVote {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'UserId (vote user)',
  })
  @Column()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'groupId (voted style group on the groups entity)',
  })
  @Column()
  groupId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'handsome',
    description: 'keyword voted style by user ',
  })
  @Column('enum', {
    name: 'votedStyle',
    enum: ['talented', 'handsome', 'pretty', 'cute', 'beautiful'],
  })
  votedStyle: 'talented' | 'handsome' | 'pretty' | 'cute' | 'beautiful';

  @ManyToOne(() => Users, (users) => users.voteGroups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => Groups, (groups) => groups.votedUser, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'groupId' })
  group: Groups;
}
