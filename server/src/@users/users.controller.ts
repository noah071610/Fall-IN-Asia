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
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { UserRequestDto } from 'src/dto/user.request.dto';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { UsersService } from './users.service';
import { MailerService } from '@nestjs-modules/mailer';
import dotenv from 'dotenv';
import { AuthGuard } from '@nestjs/passport';
dotenv.config();

@UseInterceptors(JsonResponeGenerator)
@ApiTags('User')
@Controller('/api/user')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly MailerService: MailerService,
  ) {}

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
  async signUp(@Body() data: UserRequestDto) {
    return await this.usersService.signUp(
      data.email,
      data.name,
      data.password,
      data.authNum,
    );
  }

  @UseGuards(new NotLoggedInGuard())
  @ApiOperation({ summary: 'send auth number for signup' })
  @Post(`/email/auth`)
  async sendEmailAuthNumber(@Body() data) {
    const authNum = await this.usersService.checkPossibleEmail(data.email);
    this.MailerService.sendMail({
      to: data.email,
      from: process.env.EMAIL_ID,
      subject: 'Love Asia 이메일 인증 요청 메일입니다.',
      html: `<p>안녕하세요. Love Asia 입니다. 인증번호를 보내드립니다. 인증번호를 입력하고 회원가입을 진행해주세요</p><br/><p>인증번호 : <b>${authNum}</b></p>`,
    });
    return true;
  }

  @UseGuards(new LocalAuthGuard())
  @ApiOperation({ summary: 'Login' })
  @Post('logIn')
  async logIn(@User() user) {
    const fullUserInfo = await this.usersService.findUserInfoByEmail(
      user.email,
    );
    return fullUserInfo;
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
  @Post('icon')
  async addUserIcon(@User() user, @UploadedFile() file: Express.Multer.File) {
    const addUserIcon = this.usersService.addUserIcon(user.id, file);
    return addUserIcon;
  }

  @ApiOperation({ summary: 'delete user icon' })
  @UseGuards(new LoggedInGuard())
  @Delete('icon')
  async deleteUserIcon(@User() user) {
    const deleteUserIcon = this.usersService.deleteUserIcon(user.id);
    return deleteUserIcon;
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

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.usersService.googleLogin(req.user);
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
