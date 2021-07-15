import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { GroupVote } from './GroupVote';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'groups' })
export class Groups {
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
    example: '防弾少年団',
    description: 'group name especially wrote down in japanese Language  ',
  })
  @Column('varchar', { name: 'group_name', length: 20 })
  group_name: string;

  @Index()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'bts',
    description: 'group name for url or query by using English',
  })
  @Column('varchar', { name: 'key_name', length: 20 })
  key_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'http://domain.com/uploads/239483294.jpg',
    description: 'image src',
  })
  @Column('varchar', { name: 'image' })
  image: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 0,
    description: 'talented rate for group',
  })
  @Column('int', { name: 'talented', default: 0 })
  talented: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 0,
    description: 'handsome rate for group',
  })
  @Column('int', { name: 'handsome', default: 0 })
  handsome: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 0,
    description: 'pretty rate for group',
  })
  @Column('int', { name: 'pretty', default: 0 })
  pretty: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 0,
    description: 'cute rate for group',
  })
  @Column('int', { name: 'cute', default: 0 })
  cute: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 0,
    description: 'beautiful rate for group',
  })
  @Column('int', { name: 'beautiful', default: 0 })
  beautiful: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Users, (users) => users.fan)
  user: Users[];

  @OneToMany(() => ClubPosts, (clubPosts) => clubPosts.group)
  clubPosts: ClubPosts[];

  @OneToMany(() => GroupVote, (groupVote) => groupVote.group, {
    cascade: true,
  })
  votedUser: GroupVote[];
}
