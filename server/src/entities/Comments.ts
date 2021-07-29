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
import { Notices } from './Notices';
import { Moments } from './Moments';
import { Stories } from './Stories';
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

  @OneToMany(() => Notices, (notices) => notices.comment, {
    cascade: true,
  })
  notices: Notices[];

  @ManyToOne(() => Users, (users) => users.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;

  @ManyToOne(() => Moments, (moments) => moments.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'moment', referencedColumnName: 'id' }])
  moment: Moments;

  @ManyToOne(() => Stories, (stories) => stories.comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'story', referencedColumnName: 'id' }])
  story: Stories;
}
