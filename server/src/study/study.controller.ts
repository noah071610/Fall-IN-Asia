import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import multer from 'multer';
import path from 'path';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { StudyService } from './study.service';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Study')
@ApiCookieAuth('connect.sid')
@Controller('/api/study')
export class StudyController {
  constructor(private readonly studyService: StudyService) {}

  @ApiOperation({ summary: 'Get preview posts for club main page' })
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
  async getImageForPost(@UploadedFile() file: Express.Multer.File) {
    const studyPostImage = await this.studyService.getImageForPost(file);
    return studyPostImage.src;
  }

  @ApiOperation({ summary: 'Create Study post' })
  @UseGuards(new LoggedInGuard())
  @Post()
  async createStudyPost(@User() user, @Body() data) {
    const newPost = await this.studyService.createStudyPost(user.id, data);
    return newPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Post('delete')
  async deletePost(@Body() data: any) {
    await this.studyService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    this.studyService.deletePost(data.postId);
  }

  @ApiOperation({ summary: 'Get posts from selected type' })
  @Get('search/:postId')
  async searchPostByPostId(@Param('postId', ParseIntPipe) postId: number) {
    const studyPost = await this.studyService.searchPostByPostId(postId);
    return studyPost;
  }

  @ApiOperation({ summary: 'Get Study posts' })
  @Get()
  async getStudyPosts(
    @Query('type') type: string,
    @Query('postId', ParseIntPipe) postId: number,
  ) {
    console.log('####', type, postId);

    const StudyPosts = await this.studyService.getStudyPosts(type, postId);
    return StudyPosts;
  }
}
