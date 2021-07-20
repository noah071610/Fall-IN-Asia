import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Users } from './entities/Users';
import { MarketPosts } from './entities/MarketPosts';
import { Gallery } from './entities/Gallery';
import { StudyPosts } from './entities/StudyPosts';
import { Comments } from './entities/Comments';
import { SubComments } from './entities/SubComments';
import { Images } from './entities/Images';
import { Participate } from './entities/Participate';
import { Announcements } from './entities/Announcements';
import { Chats } from './entities/Chats';
import { MainPosts } from './entities/MainPosts';
import { MainPostLike } from './entities/MainPostsLike';
import { Countries } from './entities/Countries';

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
    MainPosts,
    Gallery,
    StudyPosts,
    Comments,
    SubComments,
    Images,
    Countries,
    Announcements,
    Chats,
    Participate,
    MainPostLike,
  ],
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
