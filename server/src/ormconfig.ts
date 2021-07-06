import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Users } from './entities/Users';
import { MarketPosts } from './entities/MarketPosts';
import { ClubPosts } from './entities/ClubPosts';
import { Gallery } from './entities/Gallery';
import { LessonPosts } from './entities/LessonPosts';
import { Comments } from './entities/Comments';
import { SubComments } from './entities/SubComments';
import { Groups } from './entities/Groups';
import { NewsPosts } from './entities/NewsPosts';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    Users,
    MarketPosts,
    ClubPosts,
    Gallery,
    LessonPosts,
    NewsPosts,
    Comments,
    SubComments,
    Groups,
  ],
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
