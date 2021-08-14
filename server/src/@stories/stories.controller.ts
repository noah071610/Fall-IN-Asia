import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { StoriesService } from './stories.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';
import { User } from 'src/decorators/user.decorator';
import { StoryCreateDto, StoryEditDto } from 'src/@stories/stories.dto';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Story')
@ApiCookieAuth('connect.sid')
@Controller('/api/story')
export class StoriesController {
  constructor(private readonly StoriesService: StoriesService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create story post' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multer.diskStorage({
        destination(req, file, cb) {
          cb(null, 'uploads/');
        },
        filename(req, file, cb) {
          const ext = path.extname(file.originalname);
          cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  @Post()
  async createPost(
    @Body() form: StoryCreateDto,
    @User() user,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.StoriesService.createPost(form, user.id, file);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multer.diskStorage({
        destination(req, file, cb) {
          cb(null, 'uploads/');
        },
        filename(req, file, cb) {
          const ext = path.extname(file.originalname);
          cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  @Post('edit')
  async editPost(
    @Body() form: StoryEditDto,
    @UploadedFile() file: Express.Multer.File,
    @User() user,
  ) {
    return await this.StoriesService.editPost(form, file, user?.id);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Delete('/:storyId')
  async deletePost(@Param('storyId', ParseIntPipe) storyId: number) {
    await this.StoriesService.deletePost(storyId);
  }

  @ApiOperation({ summary: 'Get preview posts for story page' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multer.diskStorage({
        destination(req, file, cb) {
          cb(null, 'uploads/');
        },
        filename(req, file, cb) {
          const ext = path.extname(file.originalname);
          cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  @Post('image')
  async saveImage(@UploadedFile() file: Express.Multer.File) {
    const image = await this.StoriesService.saveImage(file);
    return image;
  }

  @ApiOperation({ summary: 'like post' })
  @UseGuards(new LoggedInGuard())
  @Patch('like/:storyId')
  async likePost(
    @Param('storyId', ParseIntPipe) storyId: number,
    @User() user,
  ) {
    await this.StoriesService.likePost(storyId, user.id);
  }

  @ApiOperation({ summary: 'dislike post' })
  @UseGuards(new LoggedInGuard())
  @Patch('dislike/:storyId')
  async dislikePost(
    @Param('storyId', ParseIntPipe) storyId: number,
    @User() user,
  ) {
    await this.StoriesService.dislikePost(storyId, user.id);
  }

  @ApiOperation({ summary: 'Get posts' })
  @Get()
  async getPosts(
    @Query('code') code: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('filter') filter: string,
  ) {
    if (filter) {
      return await this.StoriesService.getFilterPosts(filter, code, page);
    }
    return await this.StoriesService.getPosts(code, page);
  }

  @ApiOperation({ summary: 'Get latest posts by using ID' })
  @Get('latest')
  async getLatestPosts() {
    const latestPosts = await this.StoriesService.getLatestPosts();
    return latestPosts;
  }

  @ApiOperation({ summary: 'Get popular 9 posts' })
  @Get('popular')
  async getPopularPosts(@Query('code') code: string) {
    const popularPosts = await this.StoriesService.getPopularPosts(code);
    return popularPosts;
  }

  @ApiOperation({
    summary: 'Get side posts each one for pagination on the post page',
  })
  @Get('side/:storyId/:userId')
  async getSidePosts(
    @Param('storyId', ParseIntPipe) storyId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    const sidePosts = await this.StoriesService.getSidePosts(storyId, userId);
    return sidePosts;
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':code/:storyId')
  async getOnePost(
    @Param('code') code: string,
    @Param('storyId', ParseIntPipe) storyId: number,
    @Query('uuid') uuid: string,
  ) {
    const post = await this.StoriesService.getOnePost(storyId, code, uuid);
    return post;
  }
}
