import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClubPosts } from './ClubPosts';
import { Gallery } from './Gallery';

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

  @OneToOne(() => Gallery, (gallery) => gallery.image)
  @JoinColumn([{ name: 'gallery', referencedColumnName: 'id' }])
  gallery: Gallery;

  @ManyToOne(() => ClubPosts, (clubposts) => clubposts.images)
  @JoinColumn([{ name: 'clubPost', referencedColumnName: 'id' }])
  clubPost: ClubPosts;
}
