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
    const user = await this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.clubPosts', 'clubPost')
      .leftJoinAndSelect('clubPost.announcements', 'c_announce')
      .leftJoinAndSelect('users.marketPosts', 'marketPost')
      .leftJoinAndSelect('marketPost.announcements', 'm_announce')
      .leftJoinAndSelect('users.studyPosts', 'studyPost')
      .leftJoinAndSelect('studyPost.announcements', 's_announce')
      .leftJoinAndSelect('users.comments', 'com')
      .leftJoinAndSelect('com.post', 'cm_post')
      .leftJoinAndSelect('users.fan', 'fan')
      .leftJoinAndSelect('users.participates', 'ptcp')
      .leftJoinAndSelect('ptcp.studyPost', 'ptcp_studyPost')
      .leftJoinAndSelect('ptcp_studyPost.leaderUser', 'leader')
      .leftJoinAndSelect('users.announcements', 'announce')
      .leftJoinAndSelect('users.chatToUser', 'chat')
      .where('users.email= :email', { email })
      .getOne();

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

  async registerFan(userId: number, group: any) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.fan = group.id;
    await this.userRepository.save(user);
    return true;
  }

  async withdrawalFan(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.fan = null;
    await this.userRepository.save(user);
    return true;
  }

  async addUserIcon(userId: number, file: Express.Multer.File) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.icon = process.env.BACK_URL + file.path;
    return await this.userRepository.save(user);
  }

  async deleteUserIcon(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    user.icon =
      'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png';
    return await this.userRepository.save(user);
  }
}
