import { GroupsService } from './groups.service';
import { Get, Param, Query, UseInterceptors } from '@nestjs/common';
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

  @ApiOperation({ summary: 'get specific group for club-page' })
  @Get('/:group')
  async getSpecificGroup(@Param('group') group: string) {
    const SpecitficGroup = await this.groupsService.getSpecificGroup(group);
    return SpecitficGroup;
  }
}
