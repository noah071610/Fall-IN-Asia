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
import { SubComments } from './SubComments';
import { Users } from './Users';

@Entity({ schema: 'k-heart', name: 'comments' })
export class Comments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany(() => SubComments, (subComments) => subComments.comments)
  subComments: SubComments[];

  @ManyToOne(() => Users, (users) => users.comments)
  users: Users[];
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  userId: Users;
}
