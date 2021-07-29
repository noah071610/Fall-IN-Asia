import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Countries } from './Countries';
import { Images } from './Images';
import { Users } from './Users';

@Entity({ schema: 'travelover', name: 'visitCountry' })
export class VisitCountry {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'ID',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'UserId (visitor)',
  })
  @Column()
  userId: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 1,
    description: 'countryCode (country)',
  })
  @Column()
  countryCode: string;

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
  @ApiProperty({
    example: '역시 베트남 쌀국수가 맛있더라구요',
    description: 'review country who visited user',
    nullable: true,
  })
  @Column('varchar', { name: 'review', nullable: true })
  review: string;

  @OneToMany(() => Images, (images) => images.visit_country, {
    cascade: true,
  })
  images: Images[];

  @ManyToOne(() => Users, (users) => users.visited, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: Users;

  @ManyToOne(() => Countries, (countries) => countries.visitors, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'countryCode' })
  country: Countries;
}
