import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [ConfigModule.forRoot(), MorganModule, UsersModule],
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
