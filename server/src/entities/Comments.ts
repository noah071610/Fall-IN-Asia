import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SubComments } from './SubComments';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'comments' })
export class Comments {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SubComments, (subComments) => subComments.comment)
  subComments: SubComments[];

  @ManyToOne(() => Users, (users) => users.comments)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
