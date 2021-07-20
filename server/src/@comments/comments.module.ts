import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainPosts } from 'src/entities/MainPosts';
import { Comments } from 'src/entities/Comments';
import { Countries } from 'src/entities/Countries';
import { SubComments } from 'src/entities/SubComments';
import { Users } from 'src/entities/Users';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MainPosts,
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
