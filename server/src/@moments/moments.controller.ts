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
import { MomentsService } from './moments.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';
import { User } from 'src/decorators/user.decorator';
import { MomentRequestDto } from 'src/dto/moment.request.dto';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Moments')
@ApiCookieAuth('connect.sid')
@Controller('/api/moment')
export class MomentsController {
  constructor(private readonly MomentsService: MomentsService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create moment post' })
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
    @Body() form: MomentRequestDto,
    @User() user,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    await this.MomentsService.createPost(form, user.id, files);
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
    @Body() form: MomentRequestDto,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    await this.MomentsService.editPost(form, files);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Delete('/:momentId')
  async deletePost(@Param('momentId', ParseIntPipe) momentId: number) {
    await this.MomentsService.deletePost(momentId);
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
    await this.MomentsService.saveImage(file);
  }

  @ApiOperation({ summary: 'like post' })
  @UseGuards(new LoggedInGuard())
  @Patch('like/:momentId')
  async likePost(
    @Param('momentId', ParseIntPipe) momentId: number,
    @User() user,
  ) {
    await this.MomentsService.likePost(momentId, user.id);
  }

  @ApiOperation({ summary: 'dislike post' })
  @UseGuards(new LoggedInGuard())
  @Patch('dislike/:momentId')
  async dislikePost(
    @Param('momentId', ParseIntPipe) momentId: number,
    @User() user,
  ) {
    await this.MomentsService.dislikePost(momentId, user.id);
  }

  @ApiOperation({ summary: 'Get latest posts by using ID -' })
  @Get('latest')
  async getLatestPosts() {
    const latestPosts = await this.MomentsService.getLatestPosts();
    return latestPosts;
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':code/:momentId/:ip')
  async getOnePost(
    @Param('code') code: string,
    @Param('momentId', ParseIntPipe) momentId: number,
    @Param('ip', ParseIntPipe) ip: number,
  ) {
    const post = await this.MomentsService.getOnePost(momentId, code, ip);
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
    console.log('######', type);
    if (type) {
      switch (type) {
        case 'trip':
          type = '관광 및 여행';
          break;
        case 'abroad employment':
          type = '유학 및 취업';
          break;
        case 'job opening':
          type = '구인구직';
          break;
        case 'community':
          type = '현지 커뮤니티';
          break;
        default:
          break;
      }
    }
    if (filter) {
      return await this.MomentsService.getCommentPosts(
        filter,
        code,
        type,
        page,
      );
    }
    return await this.MomentsService.getPosts(code, page, type);
  }
}
