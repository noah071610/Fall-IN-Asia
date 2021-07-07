import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
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
import { MarketController } from './market/market.controller';
import { MarketModule } from './market/market.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MorganModule,
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Users, Groups, ClubPosts, NewsPosts, Gallery]),
    GroupsModule,
    ClubsModule,
    GalleryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      exclude: ['/api*'],
      serveRoot: '/uploads',
    }),
    MarketModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UsersService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ],
})
export class AppModule {}
