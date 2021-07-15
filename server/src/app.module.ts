import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { Users } from './entities/Users';
import { AuthModule } from './auth/auth.module';
import { GroupsModule } from './groups/groups.module';
import { ClubsModule } from './clubs/clubs.module';
import { Groups } from './entities/Groups';
import { ClubPosts } from './entities/ClubPosts';
import { NewsPosts } from './entities/NewsPosts';
import { GalleryModule } from './gallery/gallery.module';
import { Gallery } from './entities/Gallery';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MarketModule } from './market/market.module';
import { Images } from './entities/Images';
import { StudyModule } from './study/study.module';
import { StudyPosts } from './entities/StudyPosts';
import { Participate } from './entities/Participate';
import { CommentsModule } from './comments/comments.module';
import { Comments } from './entities/Comments';
import { ClubPostLike } from './entities/ClubPostLike';
import { GroupVote } from './entities/GroupVote';
import { Announcements } from './entities/Announces';
import { Chats } from './entities/Chats';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MorganModule,
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([
      Users,
      Groups,
      ClubPosts,
      NewsPosts,
      Gallery,
      Images,
      StudyPosts,
      Participate,
      Comments,
      ClubPostLike,
      GroupVote,
      Announcements,
      Chats,
    ]),
    GroupsModule,
    ClubsModule,
    GalleryModule,
    MarketModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      exclude: ['/api*'],
      serveRoot: '/uploads',
    }),
    StudyModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ],
})
export class AppModule {}
