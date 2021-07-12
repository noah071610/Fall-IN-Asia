import { GroupsService } from './groups.service';
import {
  Body,
  Get,
  Param,
  Patch,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';

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

  @ApiOperation({ summary: 'get groups with score' })
  @Patch('vote')
  async patchScore(@Body() form) {
    const voteScore = await this.groupsService.patchScore(form);
    return voteScore;
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
