import { Announcements } from './../entities/Announcements';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { Participate } from 'src/entities/Participate';
import { StudyPosts } from 'src/entities/StudyPosts';
import { Users } from 'src/entities/Users';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StudyPosts,
      Users,
      Images,
      Participate,
      Announcements,
    ]),
  ],
  providers: [StudyService],
  controllers: [StudyController],
})
export class StudyModule {}
