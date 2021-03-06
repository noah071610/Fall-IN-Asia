import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { LocalAuthGuard } from 'src/auth/local/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { UserSignUpDto } from 'src/@users/users.dto';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { UsersService } from './users.service';
import AWS from 'aws-sdk';
import { s3MulterConfig } from 'src/config';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

@UseInterceptors(JsonResponeGenerator)
@ApiTags('User')
@Controller('/api/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'get the user infomation' })
  @Get()
  getUserInfo(@User() user) {
    return user || false;
  }

  @ApiOperation({ summary: 'get specific user infomation for user page' })
  @Get(':userId')
  async getUserInfoById(@Param('userId', ParseIntPipe) userId: number) {
    return await this.usersService.getUserInfoById(userId);
  }

  @UseGuards(new NotLoggedInGuard())
  @ApiOperation({ summary: 'Sign up' })
  @Post()
  async signUp(@Body() data: UserSignUpDto) {
    return await this.usersService.signUp(
      data.email,
      data.name,
      data.password,
      data.authNum,
    );
  }

  @UseGuards(new LocalAuthGuard())
  @ApiOperation({ summary: 'Login' })
  @Post('logIn')
  async logIn(@User() user) {
    return await this.usersService.findUserInfoByEmail(user.email);
  }

  @ApiCookieAuth('connect.sid')
  @ApiOperation({ summary: 'Logout' })
  @UseGuards(new LoggedInGuard())
  @Post('logout')
  async logOut(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('connect.sid', { httpOnly: true });
    req.logout();
    return res.send('success');
  }

  @ApiOperation({ summary: 'change user icon' })
  @UseGuards(new LoggedInGuard())
  @UseInterceptors(FileInterceptor('image', s3MulterConfig))
  @Post('icon')
  async addUserIcon(@User() user, @UploadedFile() file: Express.MulterS3.File) {
    return this.usersService.addUserIcon(user.id, file);
  }

  @ApiOperation({ summary: 'delete user icon' })
  @UseGuards(new LoggedInGuard())
  @Delete('icon')
  async deleteUserIcon(@User() user) {
    return this.usersService.deleteUserIcon(user.id);
  }

  @ApiOperation({ summary: 'change user information' })
  @UseGuards(new LoggedInGuard())
  @Post('info')
  async changeUserInfo(@Body() form, @User() user) {
    return await this.usersService.changeUserInfo(user.id, form);
  }

  @ApiOperation({ summary: 'change user password' })
  @UseGuards(new LoggedInGuard())
  @Post('password')
  async changeUserPassword(
    @Req() req: Request,
    @Res() res: Response,
    @Body() form,
    @User() user,
  ) {
    const cofirmedPassword = await this.usersService.confirmPassword(
      user.id,
      form.prevPassword,
    );
    if (cofirmedPassword) {
      await this.usersService.changeUserPassword(user.id, form.newPassword);
      res.clearCookie('connect.sid', { httpOnly: true });
      req.logout();
      res.send('success');
      return true;
    }
  }

  @UseGuards(new LoggedInGuard())
  @Patch('/notice')
  async readNotice(@User() user) {
    await this.usersService.readNotice(user.id);
    return await this.usersService.getUserInfoById(user.id);
  }

  @UseGuards(new LoggedInGuard())
  @Delete('/notice/:noticeId')
  async deleteNotice(
    @Param('noticeId', ParseIntPipe) noticeId: number,
    @User() user,
  ) {
    await this.usersService.deleteNotice(noticeId, user.id);
    return await this.usersService.getUserInfoById(user.id);
  }

  @ApiOperation({ summary: 'withdrawal user' })
  @UseGuards(new LoggedInGuard())
  @Post('withdrawal')
  async withdrawalUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() form,
    @User() user,
  ) {
    const cofirmedPassword = await this.usersService.confirmPassword(
      user.id,
      form.password,
    );
    if (cofirmedPassword) {
      await this.usersService.deleteUser(user.id);
      res.clearCookie('connect.sid', { httpOnly: true });
      req.logout();
      res.send('success');
      return true;
    }
  }

  @ApiOperation({ summary: 'follow user by followingId' })
  @UseGuards(new LoggedInGuard())
  @Post('follow/:followingId')
  async followUser(
    @Param('followingId', ParseIntPipe) followingId: number,
    @User() user,
  ) {
    return await this.usersService.followUser(followingId, user?.id);
  }

  @ApiOperation({ summary: 'follow user by followingId' })
  @UseGuards(new LoggedInGuard())
  @Post('unfollow/:followingId')
  async unfollowUser(
    @Param('followingId', ParseIntPipe) followingId: number,
    @User() user,
  ) {
    return await this.usersService.unfollowUser(followingId, user?.id);
  }
}
