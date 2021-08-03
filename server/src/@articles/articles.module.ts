import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Articles } from 'src/entities/Articles';
import { Countries } from 'src/entities/Countries';
import { Images } from 'src/entities/Images';
import { Users } from 'src/entities/Users';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Articles, Countries, Images, Users])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
