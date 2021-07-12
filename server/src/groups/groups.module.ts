import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groups } from 'src/entities/Groups';
import { GroupScores } from 'src/entities/GroupScore';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
  imports: [TypeOrmModule.forFeature([Groups, GroupScores])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
