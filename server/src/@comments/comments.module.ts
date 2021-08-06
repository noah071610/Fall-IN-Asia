import { Module } from '@nestjs/common';
import { Moments } from 'src/entities/Moments';
import { Comments } from 'src/entities/Comments';
import { Countries } from 'src/entities/Countries';
import { SubComments } from 'src/entities/SubComments';
import { Users } from 'src/entities/Users';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentLike } from 'src/entities/CommentLike';
import { Notices } from 'src/entities/Notices';
import { Stories } from 'src/entities/Stories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Moments,
      Countries,
      Users,
      Comments,
      SubComments,
      CommentLike,
      Notices,
      Stories,
    ]),
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
