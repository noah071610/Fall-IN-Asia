import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { CommentRequestDto } from 'src/dto/comment.request.dto';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { CommentsService } from './comments.service';

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Comment')
@ApiCookieAuth('connect.sid')
@Controller('/api/comment')
export class CommentsController {
  constructor(private readonly CommentService: CommentsService) {}

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create Comment' })
  @Post()
  async createComment(@Body() form: CommentRequestDto, @User() user) {
    await this.CommentService.createComment(form, user.id);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete Comment' })
  @Delete(':commentId')
  async deleteComment(@Param('commentId', ParseIntPipe) commentId: number) {
    await this.CommentService.deleteComment(commentId);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Create SubComment' })
  @Post('/subComment')
  async createSubComment(@Body() form: CommentRequestDto, @User() user) {
    const createdSubComment = await this.CommentService.createSubComment(
      form.content,
      user.id,
      form.commentId,
    );
    return createdSubComment;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Delete SubComment' })
  @Delete('/subComment/:subCommentId')
  async deleteSubComment(
    @Param('subCommentId', ParseIntPipe) subCommentId: number,
  ) {
    await this.CommentService.deleteSubComment(subCommentId);
  }
}
