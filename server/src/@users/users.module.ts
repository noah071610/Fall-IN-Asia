import { Follow } from 'src/entities/Follow';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from 'src/entities/Users';
import { Notices } from 'src/entities/Notices';
import { MailerModule } from '@nestjs-modules/mailer';
import { JwtModule } from '@nestjs/jwt';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import dotenv from 'dotenv';
import { AuthNum } from 'src/entities/AuthNum';
import { GoogleStrategy } from 'src/auth/google.strategy';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Follow, Notices, AuthNum]),
    MailerModule.forRoot({
      transport: {
        service: 'Naver',
        host: 'smtp.naver.com',
        port: 587,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASS,
        },
      },
      template: {
        dir: process.cwd() + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
  controllers: [UsersController],
  providers: [UsersService, GoogleStrategy],
})
export class UsersModule {}
