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
import { MainPostsService } from './mainPosts.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';
import { User } from 'src/decorators/user.decorator';
import { MainPostRequestDto } from 'src/dto/mainPost.request.dto';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('MainPosts')
@ApiCookieAuth('connect.sid')
@Controller('/api/mainPost')
export class MainPostsController {
  constructor(private readonly MainPostsService: MainPostsService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create main post' })
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
  @Post()
  async createPost(
    @Body() form: MainPostRequestDto,
    @User() user,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    await this.MainPostsService.createPost(form, user.id, files);
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
    @Body() form: MainPostRequestDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    await this.MainPostsService.editPost(form, files);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Post('delete')
  async deletePost(@Body() data: any, @User() user) {
    await this.MainPostsService.comparePasswordForAuth(data.password, user.id);
    await this.MainPostsService.deletePost(data.postId);
  }

  @ApiOperation({ summary: 'Get preview posts for main page' })
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
    await this.MainPostsService.saveImage(file);
  }

  @ApiOperation({ summary: 'like post' })
  @UseGuards(new LoggedInGuard())
  @Patch('like/:mainPostId')
  async likePost(
    @Param('mainPostId', ParseIntPipe) mainPostId: number,
    @User() user,
  ) {
    await this.MainPostsService.likePost(mainPostId, user.id);
  }

  @ApiOperation({ summary: 'dislike post' })
  @UseGuards(new LoggedInGuard())
  @Patch('dislike/:mainPostId')
  async dislikePost(
    @Param('mainPostId', ParseIntPipe) mainPostId: number,
    @User() user,
  ) {
    await this.MainPostsService.dislikePost(mainPostId, user.id);
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':code/:mainPostId')
  async getOnePost(
    @Param('code') code: string,
    @Param('mainPostId', ParseIntPipe) mainPostId: number,
  ) {
    const post = await this.MainPostsService.getOnePost(mainPostId, code);
    return post;
  }

  @ApiOperation({ summary: 'Get posts' })
  @Get()
  async getPosts(
    @Query('code') code: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('type') type: string,
    @Query('filter') filter: string,
  ) {
    if (type) {
      switch (type) {
        case 'attractions':
          type = '관광지';
          break;
        case 'accommodations':
          type = '숙박';
          break;
        case 'food':
          type = '음식';
          break;
        case 'alert':
          type = '사기경보';
          break;
        default:
          break;
      }
    }
    if (filter) {
      return await this.MainPostsService.getCommentPosts(
        filter,
        code,
        type,
        page,
      );
    }
    return await this.MainPostsService.getPosts(code, page, type);
  }
}
