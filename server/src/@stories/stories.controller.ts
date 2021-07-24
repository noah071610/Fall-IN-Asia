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
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { StoriesService } from './stories.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';
import { User } from 'src/decorators/user.decorator';
import { StoryRequestDto } from 'src/dto/story.request.dto';

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
    @Body() form: StoryRequestDto,
    @User() user,
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.StoriesService.createPost(form, user.id, file);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @UseInterceptors(
    FilesInterceptor('image', 5, {
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
    @Body() form: StoryRequestDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    await this.StoriesService.editPost(form, files);
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
    await this.StoriesService.saveImage(file);
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

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':code/:storyId')
  async getOnePost(
    @Param('code') code: string,
    @Param('storyId', ParseIntPipe) storyId: number,
  ) {
    const post = await this.StoriesService.getOnePost(storyId, code);
    return post;
  }

  @ApiOperation({ summary: 'Get posts' })
  @Get()
  async getPosts(
    @Query('page', ParseIntPipe) page: number,
    @Query('filter') filter: string,
  ) {
    if (filter) {
      return await this.StoriesService.getFilterPost(filter, page);
    }
    return await this.StoriesService.getPosts(page);
  }
}
