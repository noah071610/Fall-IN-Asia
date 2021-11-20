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
  Req,
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
import { User } from 'src/decorators/user.decorator';
import { MomentCreateRequestDto, MomentModifyRequestDto } from './moments.dto';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import { s3MulterConfig } from 'src/config';
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Moments')
@ApiCookieAuth('connect.sid')
@Controller('/api/moment')
export class MomentsController {
  constructor(private readonly MomentsService: MomentsService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create moment post' })
  @UseInterceptors(FilesInterceptor('image', 5, s3MulterConfig))
  @Post()
  async createPost(
    @Body() form: MomentCreateRequestDto,
    @User() user,
    @UploadedFiles() files: Express.MulterS3.File[],
  ) {
    return await this.MomentsService.createPost(form, user.id, files);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @UseInterceptors(FilesInterceptor('image', 5, s3MulterConfig))
  @Post('edit')
  async editPost(
    @Body() form: MomentModifyRequestDto,
    @UploadedFiles() files: Express.MulterS3.File[],
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

  @ApiOperation({ summary: 'save image for post' })
  @UseInterceptors(FileInterceptor('image', s3MulterConfig))
  @Post('image')
  async saveImage(@UploadedFile() file: Express.MulterS3.File) {
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
  @Get('/:code/:momentId')
  async getOnePost(
    @Param('code') code: string,
    @Param('momentId', ParseIntPipe) momentId: number,
    @Query('viewCount') viewCount: string,
  ) {
    const post = await this.MomentsService.getOnePost(
      momentId,
      code,
      viewCount,
    );
    return post;
  }

  @ApiOperation({ summary: 'Get posts' })
  @Get()
  async getPosts(
    @Query('code') code: string,
    @Query('page', ParseIntPipe) page: number,
    @Query('type') type: string,
    @Query('filter') filter: string,
    @Query('momentId') momentId: string,
  ) {
    if (!filter && !type && momentId) {
      return await this.MomentsService.getPostsById(code, page, momentId);
    }
    if (filter) {
      return await this.MomentsService.getFilterPosts(filter, code, type, page);
    }

    return await this.MomentsService.getPosts(code, page, type);
  }
}
