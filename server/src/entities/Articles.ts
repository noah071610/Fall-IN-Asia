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
import { Countries } from './Countries';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'fall-in-asia', name: 'articles' })
export class Articles {
  @Index()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsNumber()
  @ApiProperty({
    example: 4,
    description: 'ranking number for article recommendation',
    nullable: true,
  })
  @Column({ type: 'int', name: 'ranking', nullable: true })
  ranking: number;

  @IsString()
  @ApiProperty({
    example: '지금 인기!',
    description: 'ranking number for article recommendation',
    nullable: true,
  })
  @Column('varchar', { name: 'label', nullable: true })
  label: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '관광뉴스',
    description: 'articles type',
  })
  @Column('enum', {
    name: 'type',
    enum: ['관광뉴스', '트렌드', '쇼핑', '이색체험', '이벤트'],
  })
  type: '관광뉴스' | '트렌드' | '쇼핑' | '이색체험' | '이벤트';

  @Index(['region'], { fulltext: true, parser: 'ngram' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '다합 , dahab',
    description: 'region for articles',
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
    description: 'one picture of thumbnail for article',
    nullable: true,
  })
  @Column('longtext', { name: 'thumbnail', nullable: true })
  thumbnail: string;

  @Index(['title'], { fulltext: true, parser: 'ngram' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '꼭 가봐야하는 이색체험 명소 ...',
    description: 'title for news',
  })
  @Column('varchar', { name: 'title', length: 50 })
  title: string;

  @Index(['content'], { fulltext: true, parser: 'ngram' })
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '태국에 처음 놀러갔을때 크게 놀랐던게 있습니다. 그건...',
    description: 'content in the news',
  })
  @Column('longtext', { name: 'content' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;

  @OneToMany(() => Images, (images) => images.article, {
    cascade: true,
  })
  images: Images[];

  @ManyToOne(() => Countries, (countries) => countries.articles, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'country', referencedColumnName: 'id' })
  country: Countries;

  @ManyToOne(() => Users, (users) => users.articles, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user: Users;
}
