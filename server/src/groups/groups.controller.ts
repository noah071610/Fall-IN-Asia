import { GroupsService } from './groups.service';
import { Get, UseInterceptors } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('User')
@Controller('/api/group')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @ApiOperation({ summary: 'get groups' })
  @Get()
  async getGroups() {
    const groups = await this.groupsService.getGroups();
    return groups;
  }
}
