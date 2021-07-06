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
import { ClubEditRequestDto } from './dto/clubEdit.request.dto';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Club')
@ApiCookieAuth('connect.sid')
@Controller('/api/club')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create post' })
  @Post()
  async createPost(@Body() data: ClubPostRequestDto) {
    const newPost = await this.clubsService.createPost(data);
    return newPost;
  }

  @ApiOperation({ summary: 'test post' })
  @Post('/test')
  async test(@Body() data?: any) {
    const newPost = await this.clubsService.test(data);
    return newPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @Post('edit')
  async editPost(@Body() data: ClubEditRequestDto) {
    const editedPost = await this.clubsService.eidtPost(data);
    return editedPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Post('delete')
  async deletePost(@Body() data: ClubPostConfirmDto) {
    await this.clubsService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    this.clubsService.deletePost(data.postId);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Comfirm password to edit post' })
  @Post('confirm')
  async confirmPasswordForEditPost(@Body() data: ClubPostConfirmDto) {
    await this.clubsService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    const postForEdit = await this.clubsService.searchPostByPostId(data.postId);
    return postForEdit;
  }

  @ApiOperation({ summary: 'Get preview posts for club main page' })
  @Get('preview')
  async getPreviewPosts() {
    const previewPosts = await this.clubsService.getPreviewPosts();
    return previewPosts;
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':group/:id')
  async getOnePost(
    @Param('group') group: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const post = await this.clubsService.getOnePost(id, group);
    return post;
  }

  @ApiOperation({ summary: 'Get posts for club-group-page' })
  @Get(':group')
  async getClubPosts(@Param('group') group: string) {
    const postsAndclubName = await this.clubsService.getClubPosts(group);
    return postsAndclubName;
  }
}
