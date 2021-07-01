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

@Entity({ schema: 'k-heart', name: 'gallery' })
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
  images: Images[];

  @ManyToOne(() => Users, (users) => users.gallery)
  users: Users[];
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  userId: Users;
}
