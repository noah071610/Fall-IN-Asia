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
import {
  MomentCreateRequestDto,
  MomentModifyRequestDto,
} from 'src/dto/moment.request.dto';

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
    @Body() form: MomentCreateRequestDto,
    @User() user,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return await this.MomentsService.createPost(form, user.id, files);
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
    @Body() form: MomentModifyRequestDto,
    @UploadedFiles() files: Express.Multer.File[],
    @User() user,
  ) {
    return await this.MomentsService.editPost(form, files, user.id);
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
    if (type) {
      switch (type) {
        case 'community':
          type = '한인 커뮤니티';
          break;
        case 'trip':
          type = '여행정보 공유';
          break;
        case 'scam alert':
          type = '사기 경보';
          break;
        case 'accompany':
          type = '동행자 모집';
          break;
        default:
          break;
      }
    }
    if (filter) {
      return await this.MomentsService.getFilterPosts(filter, code, type, page);
    }
    return await this.MomentsService.getPosts(code, page, type);
  }
}
