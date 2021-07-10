import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'marketPosts' })
export class MarketPosts {
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
    enum: ['直取引', '宅配', '出来れば直取引', '出来れば宅配'],
  })
  keyword: '直取引' | '宅配' | '出来れば直取引' | '出来れば宅配';

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '関東(東京)',
    description: 'studyPost type',
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

  @OneToMany(() => Images, (images) => images.marketPost)
  images: Images[];

  @ManyToOne(() => Users, (users) => users.marketPosts)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
