import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoinRequestDto } from '../common/dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'ユーザー情報' })
  @Get()
  getUserInfo(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '新規登録' })
  @Post()
  signUp(@Body() data: JoinRequestDto) {
    this.usersService.signUp(data.email, data.name, data.password);
  }
  @Post()
  logIn() {}
  @Delete()
  logOut() {}
}
