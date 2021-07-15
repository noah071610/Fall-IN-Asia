import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { CommentsService } from './comments.service';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Comment')
@ApiCookieAuth('connect.sid')
@Controller('/api/comment')
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}

  // @UseGuards(new LoggedInGuard())
  // @ApiOperation({ summary: 'Create post' })
  // @Get()
  // async getComments(@Param('group') group: string) {
  //   const newPost = await this.commentService.createPost(group);
  //   return newPost;
  // }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Edit post' })
  @Post()
  async createComment(@Body() data: any, @User() user) {
    const createdComment = await this.commentService.createComment(
      data.content,
      user.id,
      data.postId,
    );
    return createdComment;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete Comments' })
  @Post('delete')
  async deleteComment(@Body() data: any, @User() user) {
    await this.commentService.comparePasswordForAuth(data.password, user.id);
    await this.commentService.deleteComment(data.commentId);
    return true;
  }
}