import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Users } from './entities/Users';
import { Stories } from './entities/Stories';
import { Comments } from './entities/Comments';
import { SubComments } from './entities/SubComments';
import { Images } from './entities/Images';
import { Notices } from './entities/Notices';
import { Moments } from './entities/Moments';
import { MomentLike } from './entities/MomentLike';
import { Countries } from './entities/Countries';
import { StoryLike } from './entities/StoryLike';
import { Follow } from './entities/Follow';
import { Articles } from './entities/Articles';
import { CommentLike } from './entities/CommentLike';
import { AuthNum } from './entities/AuthNum';

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
    Stories,
    StoryLike,
    Moments,
    Comments,
    SubComments,
    Images,
    Countries,
    Notices,
    MomentLike,
    Follow,
    Articles,
    CommentLike,
    AuthNum,
  ],
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
