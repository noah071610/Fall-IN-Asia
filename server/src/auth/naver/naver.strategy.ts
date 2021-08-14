import { Strategy } from 'passport-naver';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { config } from 'dotenv';
import { SocialProfileDto } from '../auth.dto';
config();

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3060/api'
          : process.env.BACK_URL + '/auth/naver/redirect',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    const { email, nickname, id, profile_image } = profile._json;
    const user: SocialProfileDto = {
      socialId: id,
      provider: 'naver',
      email,
      name: nickname,
      icon: profile_image,
    };
    const naverUser = await this.authService.validateSocialUser(user);
    return done(null, naverUser);
  }
}
