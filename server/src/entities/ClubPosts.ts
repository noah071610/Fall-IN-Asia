import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
import { ClubPostLike } from './ClubPostLike';
import { Comments } from './Comments';
import { Groups } from './Groups';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'clubPosts' })
export class ClubPosts {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'bts',
    description: 'group name for url or query by using English',
  })
  @Column('varchar', { name: 'key_name' })
  key_name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 125,
    description: 'hit number each post',
  })
  @Column('int', { name: 'hit', default: 0 })
  hit: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ユーザーが作成したテキスト…',
    description: 'title for post',
  })
  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'ユーザーが作成したテキスト…',
    description: 'content in the post',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Images, (images) => images.clubPost, {
    cascade: true,
  })
  images: Images[];

  @OneToMany(() => ClubPostLike, (clubPostLike) => clubPostLike.clubPost, {
    cascade: true,
  })
  liked: ClubPostLike[];

  @OneToMany(() => Comments, (comments) => comments.post, {
    cascade: true,
  })
  comments: Comments[];

  @ManyToOne(() => Groups, (groups) => groups.clubPosts)
  @JoinColumn({ name: 'group' })
  group: Groups;

  @ManyToOne(() => Users, (users) => users.clubPosts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user' })
  user: Users;
}
