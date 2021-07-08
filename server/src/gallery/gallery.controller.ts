import { Body, Get, Post, Req, UploadedFile, UseGuards } from '@nestjs/common';
import { Controller, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { GalleryService } from './gallery.service';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Gallery')
@ApiCookieAuth('connect.sid')
@Controller('/api/gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @ApiOperation({ summary: 'Create gallery post' })
  @Get()
  async getGalleryPosts() {
    const galleryPosts = this.galleryService.getGalleryPosts();
    return galleryPosts;
  }

  @ApiOperation({ summary: 'Create gallery post' })
  @UseGuards(new LoggedInGuard())
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
  async createGalleryPost(
    @User() user,
    @Body() body,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('##data##', body);
    console.log('##files##', file);
    const newGalleryPost = this.galleryService.createGalleryPost(
      user.id,
      body.title,
      file,
    );
    return newGalleryPost;
  }
}
