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
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('enum', {
    name: 'keyword',
    enum: ['直取引', '宅配', '出来れば直取引', '出来れば宅配'],
  })
  keyword: '直取引' | '宅配' | '出来れば直取引' | '出来れば宅配';

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
    | '沖縄';

  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Images, (images) => images.marketPost)
  images: Images;

  @ManyToOne(() => Users, (users) => users.marketPosts)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
