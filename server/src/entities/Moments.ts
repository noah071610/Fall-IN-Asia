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
import { MomentLike } from './MomentLike';
import { Comments } from './Comments';
import { Countries } from './Countries';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'moment' })
export class Moments {
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
    example: '관광 및 여행',
    description: 'type for main post ',
  })
  @Column('enum', {
    name: 'type',
    enum: ['관광 및 여행', '유학 및 취업', '구인구직', '현지 커뮤니티'],
  })
  type: '관광 및 여행' | '유학 및 취업' | '구인구직' | '현지 커뮤니티';

  @Index(['content'], { fulltext: true, parser: 'ngram' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '제가 물어볼게있습니다! 저는 태국을 여행하는..',
    description: 'content in the main post',
  })
  @Column('longtext', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Notices, (notices) => notices.moment, {
    cascade: true,
  })
  notices: Notices[];

  @OneToMany(() => Images, (images) => images.moment, {
    cascade: true,
  })
  images: Images[];

  @OneToMany(() => MomentLike, (momentLike) => momentLike.moment, {
    cascade: true,
  })
  likedUser: MomentLike[];

  @OneToMany(() => Comments, (comments) => comments.moment, {
    cascade: true,
  })
  comments: Comments[];

  @ManyToOne(() => Countries, (countries) => countries.moments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country', referencedColumnName: 'id' })
  country: Countries;

  @ManyToOne(() => Users, (users) => users.moments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user: Users;
}
