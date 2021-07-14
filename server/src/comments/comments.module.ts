import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubPosts } from 'src/entities/ClubPosts';
import { Comments } from 'src/entities/Comments';
import { Groups } from 'src/entities/Groups';
import { Users } from 'src/entities/Users';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClubPosts, Groups, Users, Comments])],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
