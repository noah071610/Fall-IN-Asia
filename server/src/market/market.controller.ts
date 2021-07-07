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
import { ApiOperation } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { MarketService } from './market.service';

@Controller('/api/market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create market post' })
  @Post()
  async createPost(@Body() data: any) {
    const newPost = await this.marketService.createPost(data);
    return newPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit market post' })
  @Post('edit')
  async editPost(@Body() data: any) {
    const editedPost = await this.marketService.editPost(data);
    return editedPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Post('delete')
  async deletePost(@Body() data: any) {
    await this.marketService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    this.marketService.deletePost(data.postId);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Comfirm password to edit post' })
  @Post('confirm')
  async confirmPasswordForEditPost(@Body() data: any) {
    await this.marketService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    const postForEdit = await this.marketService.searchPostByPostId(
      data.postId,
    );
    return postForEdit;
  }

  @ApiOperation({ summary: 'Get preview posts for club main page' })
  @Get('preview')
  async getPreviewPosts() {
    const previewPosts = await this.marketService.getPreviewPosts();
    return previewPosts;
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':group/:id')
  async getOnePost(
    @Param('group') group: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const post = await this.marketService.getOnePost(id, group);
    return post;
  }

  @ApiOperation({ summary: 'Get posts for club-group-page' })
  @Get(':group')
  async getMarketPosts(@Param('group') group: string) {
    const postsAndclubName = await this.marketService.getMarketPosts(group);
    return postsAndclubName;
  }
}
