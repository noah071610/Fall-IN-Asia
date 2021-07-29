import { Module } from '@nestjs/common';
import { Moments } from 'src/entities/Moments';
import { Comments } from 'src/entities/Comments';
import { Countries } from 'src/entities/Countries';
import { SubComments } from 'src/entities/SubComments';
import { Users } from 'src/entities/Users';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Moments,
      Countries,
      Users,
      Comments,
      SubComments,
    ]),
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
