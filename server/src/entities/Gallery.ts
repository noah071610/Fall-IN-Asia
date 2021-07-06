import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'gallery' })
export class Gallery {
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

  @OneToOne(() => Images, (images) => images.gallery)
  @JoinColumn([{ name: 'image', referencedColumnName: 'id' }])
  image: Gallery;

  @ManyToOne(() => Users, (users) => users.gallerys)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
