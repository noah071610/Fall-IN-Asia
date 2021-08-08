import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy } from 'passport-kakao';
import { IVerifyOptions, VerifyFunction } from 'passport-local';
import { SocialProfileDto } from '../auth.dto';
import { AuthService } from '../auth.service';
config();

@Injectable()
export class KaKaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: '',
      callbackURL: 'http://localhost:3060/api/auth/kakao/redirect',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<VerifyFunction> {
    const {
      id: socialId,
      username: name,
      _json: {
        properties: { profile_image },
        kakao_account: { email },
      },
    } = profile;
    const user: SocialProfileDto = {
      provider: 'kakao',
      socialId,
      email,
      name,
      icon: profile_image,
    };
    const kakaoUser = await this.authService.validateSocialUser(user);
    return done(null, kakaoUser);
  }
}
