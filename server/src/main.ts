import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import helmet from 'helmet';
import hpp from 'hpp';
import dotenv from 'dotenv';

import { HttpExceptionFilter } from './http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

declare const module: any;

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  const port = process.env.PORT || 3060;
  const prod: boolean = process.env.NODE_ENV === 'production';

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = new DocumentBuilder()
    .setTitle('Fall IN Asia')
    .setDescription('우리들만의 작은 여행 커뮤니티')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: prod ? true : false,
        domain: prod && process.env.CLIENT_DOMAIN_URL,
        maxAge: 1000 * 60 * 60,
      },
      proxy: prod ? true : false,
    }),
  );

  if (prod) {
    app.set('trust proxy', 1);
    app.use(helmet());
    app.use(hpp());
    app.enableCors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    });
    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        console.log('=====================================');
      }
      console.log('====== FALL IN ASIA PRODUCTION ======');
      for (let i = 0; i < 2; i++) {
        console.log('=====================================');
      }
    }, 3000);
  } else {
    app.enableCors({
      origin: true,
      credentials: true,
    });
    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        console.log('======================================');
      }
      console.log('====== FALL IN ASIA DEVELOPMENT ======');
      for (let i = 0; i < 2; i++) {
        console.log('======================================');
      }
    }, 3000);
  }

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(port);
  for (let i = 0; i < 2; i++) {
    console.log('===================================');
  }
  console.log(`======= PORT NUMBER : ${port} ========`);
  for (let i = 0; i < 2; i++) {
    console.log('===================================');
  }
}
bootstrap();
