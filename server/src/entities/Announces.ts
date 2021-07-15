import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'announcements' })
export class Announcements {
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
    example: '直取引',
    description: 'keyword for market post ',
  })
  @Column('enum', {
    name: 'keyword',
    enum: [
      'レッスン',
      '韓国語勉強俱楽部',
      'マーケット',
      'ファンクラブ',
      'ギャラリー',
    ],
  })
  keyword:
    | 'レッスン'
    | '韓国語勉強俱楽部'
    | 'マーケット'
    | 'ファンクラブ'
    | 'ギャラリー';

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '新しいお知らせがあります',
    description: 'message to some user',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.announcements)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
