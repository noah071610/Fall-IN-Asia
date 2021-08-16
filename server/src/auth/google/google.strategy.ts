import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { config } from 'dotenv';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { SocialProfileDto } from '../auth.dto';
import { AuthService } from '../auth.service';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3060'
          : process.env.BACK_URL + '/api/auth/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { displayName, emails, photos, id } = profile;
    const user: SocialProfileDto = {
      socialId: id,
      provider: 'google',
      email: emails[0].value,
      name: displayName,
      icon: photos[0].value,
    };
    const googleUser = await this.authService.validateSocialUser(user);
    return done(null, googleUser);
  }
}
