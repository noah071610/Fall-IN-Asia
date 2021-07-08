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
import { MarketService } from './market.service';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Market')
@ApiCookieAuth('connect.sid')
@Controller('/api/market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @ApiOperation({ summary: 'Create market post' })
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
  async createPost(
    @User() user,
    @Body() data,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    const newPost = await this.marketService.createPost(user.id, data, files);
    return newPost;
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

  @ApiOperation({ summary: 'Get one post for market Post' })
  @Get(':id')
  async getOnePostById(@Param('id', ParseIntPipe) id: number) {
    const marketPost = await this.marketService.getOnePostById(id);
    return marketPost;
  }

  @ApiOperation({ summary: 'Get market posts' })
  @Get()
  async getMarketPosts() {
    const getMarketPosts = await this.marketService.getMarketPosts();
    return getMarketPosts;
  }
}
