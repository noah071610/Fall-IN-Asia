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
import { CountriesModule } from './@countries/countries.module';
import { MainPostsModule } from './@mainPosts/mainPosts.module';
import { Countries } from './entities/Countries';
import { MainPosts } from './entities/MainPosts';
import { GalleryModule } from './gallery/gallery.module';
import { Gallery } from './entities/Gallery';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MarketModule } from './market/market.module';
import { Images } from './entities/Images';
import { StudyModule } from './study/study.module';
import { StudyPosts } from './entities/StudyPosts';
import { Participate } from './entities/Participate';
import { CommentsModule } from './@comments/comments.module';
import { Comments } from './entities/Comments';
import { MainPostLike } from './entities/MainPostsLike';
import { Announcements } from './entities/Announcements';
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
      Countries,
      MainPosts,
      Gallery,
      Images,
      StudyPosts,
      Participate,
      Comments,
      MainPostLike,
      Announcements,
      Chats,
    ]),
    CountriesModule,
    MainPostsModule,
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
