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
import { Comments } from './Comments';
import { Users } from './Users';

@Entity({ schema: 'k-heart', name: 'subComments' })
export class SubComments {
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

  @ManyToOne(() => Users, (users) => users.subComments)
  users: Users[];
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  userId: Users;

  @ManyToOne(() => Comments, (comments) => comments.subComments)
  comments: Comments[];
  @JoinColumn([{ name: 'commentId', referencedColumnName: 'id' }])
  commentId: Comments;
}
