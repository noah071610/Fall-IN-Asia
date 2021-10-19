import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { AuthNum } from 'src/entities/AuthNum';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { SocialProfileDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private UserRepository: Repository<Users>,
    @InjectRepository(AuthNum) private AuthNumRepository: Repository<AuthNum>,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.UserRepository.findOne({
      where: { email },
      select: ['id', 'icon', 'email', 'password'],
    });
    if (!user) {
      throw new UnauthorizedException('유효하지 않은 이메일입니다.');
    }
    if (!password) {
      throw new UnauthorizedException('비밀번호를 입력해주세요.');
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } else {
      throw new UnauthorizedException('비밀번호가 틀렸습니다.');
    }
  }

  async validateSocialUser(profile: SocialProfileDto) {
    const user = await this.UserRepository.findOne({
      where: [{ email: profile.email }, { socialId: profile.socialId }],
      select: ['id', 'icon'],
    });
    if (!user) {
      const newUser = new Users();
      newUser.socialId = profile.socialId;
      newUser.provider = profile.provider;
      newUser.email = profile.email;
      newUser.icon = profile.icon;
      newUser.name = profile.name;
      newUser.introduce = `안녕하세요 ${profile.name}입니다.`;
      await this.UserRepository.save(newUser);
      return newUser;
    }
    return user;
  }

  async checkPossibleEmail(email: string) {
    if (!email) {
      throw new BadRequestException('이메일을 작성해주세요.');
    }
    const user = await this.UserRepository.findOne({ where: { email: email } });
    if (user) {
      throw new UnauthorizedException('누군가 사용하고있는 이메일입니다.');
    }
    const generateRandom = function (min: number, max: number) {
      const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
      return ranNum;
    };
    const authNum: number = generateRandom(111111, 999999);
    await this.AuthNumRepository.save({
      email,
      authNum,
    });
    return authNum;
  }
}
