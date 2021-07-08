import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { MarketPosts } from './MarketPosts';

@Entity({ schema: 'k_heart', name: 'images' })
export class Images {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'src' })
  src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => MarketPosts, (marketPosts) => marketPosts.images)
  @JoinColumn([{ name: 'marketPost', referencedColumnName: 'id' }])
  marketPost: MarketPosts;

  @ManyToOne(() => ClubPosts, (clubPosts) => clubPosts.images)
  @JoinColumn([{ name: 'clubPost', referencedColumnName: 'id' }])
  clubPost: ClubPosts;
}
