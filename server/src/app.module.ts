import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { UsersModule } from './@users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { CountriesModule } from './@countries/countries.module';
import { MomentsModule } from './@moments/moments.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StoriesModule } from './@stories/stories.module';
import { CommentsModule } from './@comments/comments.module';
import { ArticlesModule } from './@articles/articles.module';
import { Moments } from './entities/Moments';
import { Stories } from './entities/Stories';
@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MorganModule,
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Moments, Stories]),
    CountriesModule,
    MomentsModule,
    StoriesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      exclude: ['/api*'],
      serveRoot: '/uploads',
    }),
    CommentsModule,
    ArticlesModule,
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
