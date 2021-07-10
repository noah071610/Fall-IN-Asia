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
import { SubComments } from './SubComments';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'comments' })
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
    example: 'コメントありがとう！',
    description: 'subcomment on the comment',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SubComments, (subComments) => subComments.comment)
  subComments: SubComments[];

  @ManyToOne(() => Users, (users) => users.comments)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
