import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity({ schema: 'k-heart', name: 'marketPosts' })
export class MarketPosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'tag', length: 20 })
  tag: string;

  @Column('enum', {
    name: 'area',
    enum: [
      'hotkaido',
      'tohoku',
      'kanto',
      'chubu',
      'kansai',
      'chugoku',
      'shikoku',
      'kyushu',
      'okinawa',
    ],
  })
  area:
    | 'hotkaido'
    | 'tohoku'
    | 'kanto'
    | 'chubu'
    | 'kansai'
    | 'chugoku'
    | 'shikoku'
    | 'kyushu'
    | 'okinawa';

  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @Column('varchar', { name: 'content' })
  content: string;

  @Column('varchar', { name: 'src' })
  src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.marketPosts)
  users: Users[];
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  userId: Users;
}
