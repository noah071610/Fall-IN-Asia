import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groups } from 'src/entities/Groups';
import { GroupVote } from 'src/entities/GroupVote';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Groups, GroupVote])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
