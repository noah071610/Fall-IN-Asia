import { MailerService } from '@nestjs-modules/mailer';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JsonResponeGenerator } from 'src/intersepter/json.respone.middleware';
import dotenv from 'dotenv';
import { NotLoggedInGuard } from './not-logged-in.guard';
import { GoogleAuthGuard } from './google/google-auth.guard';
import { KakaoAuthGuard } from './kakao/kakao-auth.guard';
import { NaverAuthGuard } from './naver/naver-auth.guard';
dotenv.config();

@UseInterceptors(JsonResponeGenerator)
@ApiTags('Auth')
@Controller('/api/auth')
export class AuthController {
  constructor(
    private readonly AuthService: AuthService,
    private readonly MailerService: MailerService,
  ) {}

  @UseGuards(new NotLoggedInGuard())
  @ApiOperation({ summary: 'send auth number for signup' })
  @Post(`email`)
  async sendEmailAuthNumber(@Body() data) {
    const authNum = await this.AuthService.checkPossibleEmail(data.email);
    this.MailerService.sendMail({
      to: data.email,
      from: process.env.EMAIL_ID,
      subject: 'Love Asia 이메일 인증 요청 메일입니다.',
      html: `<p>안녕하세요. Love Asia 입니다. 인증번호를 보내드립니다. 인증번호를 입력하고 회원가입을 진행해주세요</p><br/><p>인증번호 : <b>${authNum}</b></p>`,
    });
    return true;
  }

  @Get('google')
  @ApiOperation({ summary: 'try google login ' })
  @UseGuards(new GoogleAuthGuard())
  async googleAuth(@Req() req) {}

  @Get('google/redirect')
  @ApiOperation({ summary: 'goolge login redirect after auth' })
  @UseGuards(new GoogleAuthGuard())
  async googleAuthRedirect(@Req() req, @Res() res) {
    res.redirect('http://localhost:3000');
  }

  @Get('kakao')
  @ApiOperation({ summary: 'try kakao login ' })
  @UseGuards(new KakaoAuthGuard())
  async kakaoAuth(@Req() req) {}

  @Get('kakao/redirect')
  @ApiOperation({ summary: 'kakao login redirect after auth' })
  @UseGuards(new KakaoAuthGuard())
  async kakaoAuthRedirect(@Req() req, @Res() res) {
    res.redirect('http://localhost:3000');
  }

  @Get('naver')
  @ApiOperation({ summary: 'try naver login ' })
  @UseGuards(new NaverAuthGuard())
  async naverAuth(@Req() req) {}

  @Get('naver/redirect')
  @ApiOperation({ summary: 'naver login redirect after auth' })
  @UseGuards(new NaverAuthGuard())
  async naverAuthRedirect(@Req() req, @Res() res) {
    res.redirect('http://localhost:3000');
  }
}
