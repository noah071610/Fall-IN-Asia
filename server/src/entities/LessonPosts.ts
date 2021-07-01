import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';

@Entity({ schema: 'k-heart', name: 'lessonPosts' })
export class LessonPosts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('enum', {
    name: 'type',
    enum: ['topik', 'communication', 'business', 'hobby'],
  })
  type: 'topik' | 'communication' | 'business' | 'hobby';

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

  @Column('int', { name: 'participant' })
  participant: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.lessonPosts)
  users: Users[];
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  userId: Users;

  @ManyToMany(() => Users, (users) => users.id)
  @JoinTable({
    name: 'lesson_participant',
    joinColumn: {
      name: 'LessonId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
  })
  joinUserId: Users[];
}
