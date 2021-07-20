import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Announcements } from './Announcements';
import { MainPostLike } from './MainPostsLike';
import { Comments } from './Comments';
import { Countries } from './Countries';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'k_heart', name: 'mainPosts' })
export class MainPosts {
  @Index()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Index()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'KOR',
    description: 'country code for url or query by using English',
  })
  @Column('varchar', { name: 'code' })
  code: string;

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
    example: '관광지',
    description: 'type for main post ',
  })
  @Column('enum', {
    name: 'type',
    enum: ['관광지', '음식', '숙박', '사기경보'],
  })
  type: '관광지' | '음식' | '숙박' | '사기경보';

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '제가 물어볼게있습니다! 저는 태국을 여행하는..',
    description: 'content in the main post',
  })
  @Column('varchar', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Announcements, (announcements) => announcements.mainPost, {
    cascade: true,
  })
  announcements: Announcements[];

  @OneToMany(() => Images, (images) => images.mainPost, {
    cascade: true,
  })
  images: Images[];

  @OneToMany(() => MainPostLike, (mainPostLike) => mainPostLike.mainPost, {
    cascade: true,
  })
  likedUser: MainPostLike[];

  @OneToMany(() => Comments, (comments) => comments.mainPost, {
    cascade: true,
  })
  comments: Comments[];

  @ManyToOne(() => Countries, (countries) => countries.mainPosts)
  @JoinColumn({ name: 'country', referencedColumnName: 'id' })
  country: Countries;

  @ManyToOne(() => Users, (users) => users.mainPosts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user: Users;
}
