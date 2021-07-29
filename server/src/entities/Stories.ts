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
import { Notices } from './Notices';
import { Comments } from './Comments';
import { Countries } from './Countries';
import { Images } from './Images';
import { StoryLike } from './StoryLike';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'stories' })
export class Stories {
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

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '다합 , dahab',
    description: 'region where user visited',
  })
  @Column('varchar', { name: 'region' })
  region: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '133.2342345',
    description: 'latitute of region',
  })
  @Column('float', { name: 'lat' })
  lat: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '53.2342345',
    description: 'longitude of region',
  })
  @Column('float', { name: 'lng' })
  lng: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'http://upload/images/03420204.blob',
    description: 'one picture of thumbnail for story',
    nullable: true,
  })
  @Column('longtext', { name: 'thumbnail', nullable: true })
  thumbnail: string;

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
    example: '아유타야 연대기 1화 ...',
    description: 'title for post',
  })
  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '태국에 처음 놀러갔을때 크게 놀랐던게 있습니다. 그건...',
    description: 'content in the post',
  })
  @Column('longtext', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Notices, (notices) => notices.story, {
    cascade: true,
  })
  notices: Notices[];

  @OneToMany(() => Images, (images) => images.story, {
    cascade: true,
  })
  images: Images[];

  @OneToMany(() => StoryLike, (storyLike) => storyLike.story, {
    cascade: true,
  })
  likedUser: StoryLike[];

  @OneToMany(() => Comments, (comments) => comments.story, {
    cascade: true,
  })
  comments: Comments[];

  @ManyToOne(() => Countries, (countries) => countries.moments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country', referencedColumnName: 'id' })
  country: Countries;

  @ManyToOne(() => Users, (users) => users.stories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: Users;
}
