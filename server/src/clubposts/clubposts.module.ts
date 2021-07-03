import { Module } from '@nestjs/common';
import { ClubPostsService } from './clubposts.service';
import { ClubPostsController } from './clubposts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubPosts } from 'src/entities/ClubPosts';

@Module({
  imports: [TypeOrmModule.forFeature([ClubPosts])],
  providers: [ClubPostsService],
  controllers: [ClubPostsController],
})
export class ClubPostsModule {}
