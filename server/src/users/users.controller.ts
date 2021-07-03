import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
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
    res.send('ok');
  }
}
