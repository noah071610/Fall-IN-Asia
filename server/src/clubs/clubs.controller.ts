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
import { ClubsService } from './clubs.service';
import { ClubPostRequestDto } from './dto/clubPost.request.dto';
import { ClubPostConfirmDto } from './dto/clubPost.confirm.dto';
import { ClubEditRequestDto } from './dto/clubEdit.request.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import path from 'path';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Club')
@ApiCookieAuth('connect.sid')
@Controller('/api/club')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create post' })
  @Post()
  async createPost(@Body() data: ClubPostRequestDto) {
    const newPost = await this.clubsService.createPost(data);
    return newPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @Post('edit')
  async editPost(@Body() data: ClubEditRequestDto) {
    const editedPost = await this.clubsService.eidtPost(data);
    return editedPost;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete post' })
  @Post('delete')
  async deletePost(@Body() data: ClubPostConfirmDto) {
    await this.clubsService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    this.clubsService.deletePost(data.postId);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Comfirm password to edit post' })
  @Post('confirm')
  async confirmPasswordForEditPost(@Body() data: ClubPostConfirmDto) {
    await this.clubsService.comparePasswordForAuth({
      password: data.password,
      userId: data.userId,
    });
    const postForEdit = await this.clubsService.searchPostByPostId(data.postId);
    return postForEdit;
  }

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
    const clubPostimage = await this.clubsService.getImageForPost(file);
    return clubPostimage.src;
  }

  @ApiOperation({ summary: 'Get preview posts for club main page' })
  @Post('visit')
  async getVisitClubs(@Body() body) {
    const visitedPosts = await this.clubsService.getVisitClubs(body);
    return visitedPosts;
  }

  @ApiOperation({ summary: 'Get preview posts for club main page' })
  @Get('preview')
  async getPreviewPosts() {
    const previewPosts = await this.clubsService.getPreviewPosts();
    return previewPosts;
  }

  @ApiOperation({ summary: 'Get one post for post page' })
  @Get(':group/:id')
  async getOnePost(
    @Param('group') group: string,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const post = await this.clubsService.getOnePost(id, group);
    return post;
  }

  @ApiOperation({ summary: 'Get posts for club-group-page' })
  @Get(':group')
  async getClubPosts(
    @Param('group') group: string,
    @Query('page', ParseIntPipe) page: number,
  ) {
    const postsAndclubName = await this.clubsService.getClubPosts(group, page);
    return postsAndclubName;
  }
}
