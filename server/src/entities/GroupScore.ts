import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Groups } from './Groups';

@Entity({ schema: 'k_heart', name: 'groupScores' })
export class GroupScores {
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

  @OneToOne(() => Groups, (groups) => groups.groupScore)
  @JoinColumn([{ name: 'groupId', referencedColumnName: 'id' }])
  groupId: Groups;
}
