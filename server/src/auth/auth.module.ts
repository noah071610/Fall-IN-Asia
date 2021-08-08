import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthNum } from 'src/entities/AuthNum';
import { Users } from '../entities/Users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Serializer } from './serializer';
import { LocalStrategy } from './local/local.strategy';
import { GoogleStrategy } from './google/google.strategy';
import { KaKaoStrategy } from './kakao/kakao.strategy';
import { NaverStrategy } from './naver/naver.strategy';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    TypeOrmModule.forFeature([Users, AuthNum]),
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
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    Serializer,
    GoogleStrategy,
    KaKaoStrategy,
    NaverStrategy,
  ],
})
export class AuthModule {}
