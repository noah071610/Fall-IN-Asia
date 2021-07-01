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

@Entity({ schema: 'k-heart', name: 'images' })
export class Images {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'src' })
  src: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToOne(() => Gallery, (gallery) => gallery.images)
  gallery: Gallery[];
  @JoinColumn([{ name: 'galleryId', referencedColumnName: 'id' }])
  galleryId: Gallery;

  @ManyToOne(() => ClubPosts, (clubposts) => clubposts.images)
  clubposts: ClubPosts[];
  @JoinColumn([{ name: 'clubPostId', referencedColumnName: 'id' }])
  clubPostId: ClubPosts;
}
