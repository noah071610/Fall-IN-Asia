import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Announcements } from './Announcements';
import { Images } from './Images';
import { Participate } from './Participate';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'studyPosts' })
export class StudyPosts {
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
    example: 'レッスン',
    description: 'studyPost type',
  })
  @Column('enum', {
    name: 'type',
    enum: ['レッスン', '韓国語勉強俱楽部'],
  })
  type: 'レッスン' | '韓国語勉強俱楽部';

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '関東(東京)',
    description: 'studyPost area type',
  })
  @Column('enum', {
    name: 'area',
    enum: [
      '関東(東京)',
      '関西(大阪)',
      '九州',
      '東北',
      '中部',
      '中国',
      '四国',
      '北海道',
      '沖縄',
      '大韓民国',
    ],
  })
  area:
    | '関東(東京)'
    | '関西(大阪)'
    | '九州'
    | '東北'
    | '中部'
    | '中国'
    | '四国'
    | '北海道'
    | '沖縄'
    | '大韓民国';

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ユーザーが作成したテキスト…',
    description: 'title for post',
  })
  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ユーザーが作成したテキスト…',
    description: 'content in the post',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (users) => users.studyPosts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'leaderUser', referencedColumnName: 'id' }])
  leaderUser: Users;

  @OneToMany(() => Announcements, (announcements) => announcements.studyPost, {
    cascade: true,
  })
  announcements: Announcements[];

  @OneToMany(() => Images, (images) => images.studyPost, {
    cascade: true,
  })
  images: Images[];

  @OneToMany(() => Participate, (participate) => participate.studyPost, {
    cascade: true,
  })
  participates: Participate[];
}
