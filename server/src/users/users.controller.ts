import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import multer from 'multer';
import path from 'path';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';
import { NotLoggedInGuard } from 'src/auth/not-logged-in.guard';
import { User } from 'src/decorators/user.decorator';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import { JoinRequestDto } from './dto/join.request.dto';
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

  @UseGuards(new NotLoggedInGuard())
  @ApiOperation({ summary: 'Sign up' })
  @Post()
  async signUp(@Body() data: JoinRequestDto) {
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

  @ApiOperation({ summary: 'Logout' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    return true;
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Register fan' })
  @Post('fan')
  async registerFan(@Body() data: any, @User() user) {
    await this.usersService.registerFan(user.id, data);
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({ summary: 'Withdrawal fan' })
  @Delete('fan')
  async withdrawalFan(@User() user) {
    await this.usersService.withdrawalFan(user.id);
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
}
