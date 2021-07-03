import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { ClubPostsService } from './clubposts.service';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Club')
@ApiCookieAuth('connect.sid')
@Controller('/api/club')
export class ClubPostsController {
  constructor(private readonly clubPostsService: ClubPostsService) {}

  @ApiOperation({ summary: 'Get posts for specific group' })
  @Get(':group')
  async getClubPosts(@Param('group') group: string) {
    const posts = await this.clubPostsService.getClubPosts(group);
    return posts;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create post' })
  @Post()
  async createPost() {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Delete()
  async deletePost() {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @Post('edit')
  async editPost() {}
}
