import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { GroupScores } from './GroupScore';
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Users, (users) => users.fan)
  user: Users[];

  @OneToOne(() => GroupScores, (groupScores) => groupScores.groupId)
  @JoinColumn([{ name: 'groupScore', referencedColumnName: 'id' }])
  groupScore: GroupScores;

  @OneToMany(() => ClubPosts, (clubPosts) => clubPosts.group)
  clubPosts: ClubPosts[];
}
