import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { ArticlesService } from './articles.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';
import { User } from 'src/decorators/user.decorator';
import { ArticleCreateDto, ArticleEditDto } from 'src/@articles/articles.dto';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Articles')
@ApiCookieAuth('connect.sid')
@Controller('/api/article')
export class ArticlesController {
  constructor(private readonly ArticlesService: ArticlesService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create article post' })
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
    @Body() form: ArticleCreateDto,
    @User() user,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.ArticlesService.createPost(form, user.id, file);
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
    @Body() form: ArticleEditDto,
    @UploadedFile() file: Express.Multer.File,
    @User() user,
  ) {
    return await this.ArticlesService.editPost(form, file, user.id);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Delete('/:articleId')
  async deletePost(
    @Param('articleId', ParseIntPipe) articleId: number,
    @User() user,
  ) {
    await this.ArticlesService.deletePost(articleId, user.id);
  }

  @ApiOperation({ summary: 'save image for article' })
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
    const image = await this.ArticlesService.saveImage(file);
    return image;
  }

  @ApiOperation({ summary: 'Get posts' })
  @Get()
  async getPosts(
    @Query('page', ParseIntPipe) page: number,
    @Query('type') type: string,
  ) {
    return await this.ArticlesService.getPosts(type, page);
  }

  @ApiOperation({ summary: 'Get latest posts by using ID' })
  @Get('popular')
  async getPopularPosts(@Query('code') code: string) {
    const popularPosts = await this.ArticlesService.getPopularPosts(code);
    return popularPosts;
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':articleId')
  async getOnePost(@Param('articleId', ParseIntPipe) articleId: number) {
    const post = await this.ArticlesService.getOnePost(articleId);
    return post;
  }
}