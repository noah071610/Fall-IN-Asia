import { GroupsService } from './groups.service';
import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { User } from 'src/decorators/user.decorator';
import { LoggedInGuard } from 'src/auth/logged-in.guard';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Groups')
@Controller('/api/group')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiOperation({ summary: 'get groups' })
  @Get()
  async getGroups() {
    const groups = await this.groupsService.getGroups();
    return groups;
  }

  @ApiOperation({ summary: 'get groups with score' })
  @Get('/score')
  async getGroupsWithScore() {
    const groupsWithScore = await this.groupsService.getGroupsWithScore();
    return groupsWithScore;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'get groups with score' })
  @Patch('vote')
  async patchScore(@Body() data, @User() user) {
    const voteScore = await this.groupsService.patchScore(
      data.style,
      data.groupId,
      user.id,
    );
    return voteScore;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'get groups with score' })
  @Delete('vote/:style/:groupId')
  async undoScore(
    @Param('style') style,
    @Param('groupId') groupId,
    @User() user,
  ) {
    const undoScore = await this.groupsService.undoScore(
      style,
      groupId,
      user.id,
    );
    return undoScore;
  }

  @ApiOperation({ summary: 'get specific group with score for vote' })
  @Get('/score/:group')
  async getGroupWithScore(@Param('group') group: string) {
    const groupWithScore = await this.groupsService.getGroupWithScore(group);
    return groupWithScore;
  }

  @ApiOperation({ summary: 'get specific group for club-page' })
  @Get('/:group')
  async getSpecificGroup(@Param('group') group: string) {
    const SpecitficGroup = await this.groupsService.getSpecificGroup(group);
    return SpecitficGroup;
  }
}
