import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
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

  @ApiOperation({ summary: 'Create Study post' })
  @UseGuards(new LoggedInGuard())
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
  async createStudyPost(
    @User() user,
    @Body() data,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const newPost = await this.studyService.createStudyPost(
      user.id,
      data,
      files,
    );
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

  @ApiOperation({ summary: 'Get one post for Study Post' })
  @Get(':id')
  async getOnePostById(@Param('id', ParseIntPipe) id: number) {
    const StudyPost = await this.studyService.getOnePostById(id);
    return StudyPost;
  }

  @ApiOperation({ summary: 'Get Study posts' })
  @Get()
  async getStudyPosts() {
    const StudyPosts = await this.studyService.getStudyPosts();
    return StudyPosts;
  }
}
