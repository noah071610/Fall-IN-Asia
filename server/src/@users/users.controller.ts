import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
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
import { format } from 'morgan';
import multer from 'multer';
import path from 'path';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { UserRequestDto } from 'src/dto/user.request.dto';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { UsersService } from './users.service';

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
  async signUp(@Body() data: UserRequestDto) {
    await this.usersService.signUp(data.email, data.name, data.password);
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
    req.session.destroy(null);
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
      req.session.destroy(null);
      res.clearCookie('connect.sid', { httpOnly: true });
      req.logout();
      res.send('success');
      return true;
    }
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
      req.session.destroy(null);
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
