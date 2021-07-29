import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notices } from 'src/entities/Notices';
import { Countries } from 'src/entities/Countries';
import { Images } from 'src/entities/Images';
import { Stories } from 'src/entities/Stories';
import { StoryLike } from 'src/entities/StoryLike';
import { Users } from 'src/entities/Users';
import { StoriesController } from './stories.controller';
import { StoriesService } from './stories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Stories,
      Users,
      Images,
      Notices,
      StoryLike,
      Countries,
    ]),
  ],
  providers: [StoriesService],
  controllers: [StoriesController],
})
export class StoriesModule {}
