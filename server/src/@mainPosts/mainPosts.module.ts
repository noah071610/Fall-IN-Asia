import { Module } from '@nestjs/common';
import { MainPostsService } from './mainPosts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainPosts } from 'src/entities/MainPosts';
import { Countries } from 'src/entities/Countries';
import { Users } from 'src/entities/Users';
import { Images } from 'src/entities/Images';
import { MainPostLike } from 'src/entities/MainPostsLike';
import { Announcements } from 'src/entities/Announcements';
import { MainPostsController } from './mainPosts.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MainPosts,
      Countries,
      Users,
      Images,
      MainPostLike,
      Announcements,
    ]),
  ],
  providers: [MainPostsService],
  controllers: [MainPostsController],
})
export class MainPostsModule {}
