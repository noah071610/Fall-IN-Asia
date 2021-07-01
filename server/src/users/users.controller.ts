import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'get the user infomation' })
  @Get()
  getUserInfo(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: 'Sgin up ' })
  @Post()
  async signUp(@Body() data: JoinRequestDto) {
    await this.usersService.signUp(data.email, data.name, data.password);
  }

  @Post()
  logIn() {}
  @Delete()
  logOut() {}
}
