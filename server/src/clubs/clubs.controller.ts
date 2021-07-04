import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { ClubsService } from './clubs.service';
import { ClubPostRequestDto } from './dto/clubPost.request.dto';
import { ClubPostConfirmDto } from './dto/clubPost.confirm.dto';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Club')
@ApiCookieAuth('connect.sid')
@Controller('/api/club/')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get('/post/:group/:id')
  async getOnePost(@Param('group') group: string, @Param('id') id: string) {
    const post = await this.clubsService.getOnePost(id, group);
    return post;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create post' })
  @Post()
  async createPost(@Body() data: ClubPostRequestDto) {
    const newPost = await this.clubsService.createPost(data);
    return newPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Post('/delete')
  async deletePost(@Body() data: ClubPostConfirmDto) {
    await this.clubsService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    return this.clubsService.deletePost(data);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Comfirm password to edit post' })
  @Post('/edit')
  async editPost(@Body() data: ClubPostConfirmDto) {
    await this.clubsService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    const postForEdit = await this.clubsService.editPost(data);
    return postForEdit;
  }

  @ApiOperation({ summary: 'Get posts for specific group' })
  @Get(':group')
  async getClubPosts(@Param('group') group: string) {
    const postsAndclubName = await this.clubsService.getClubPostsAndNameForClub(
      group,
    );
    return postsAndclubName;
  }
}
