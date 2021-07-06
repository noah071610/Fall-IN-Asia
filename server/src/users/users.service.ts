import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async findUserInfoByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['clubPosts', 'comments', 'marketPosts', 'fan'],
    });
    if (!user) {
      throw new UnauthorizedException(
        'ユーザーの情報がありません、もう一度確認してください。',
      );
    }
    return user;
  }

  async signUp(email: string, name: string, password: string) {
    if (!email) {
      throw new BadRequestException('メールアドレスを書いてください。');
    }
    if (!name) {
      throw new BadRequestException('名前を書いてください。');
    }
    if (!password) {
      throw new BadRequestException('暗証番号を書いてください。');
    }
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new UnauthorizedException('誰かが使っているメールアドレスです。');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      email,
      name,
      password: hashedPassword,
    });
  }
}
