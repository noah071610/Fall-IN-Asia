import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async findUserInfoByEmail(email: string) {
    const user = await this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.likeStory', 'likeStory')
      .leftJoinAndSelect('users.likeMoment', 'likeMoment')
      .leftJoinAndSelect('users.stories', 'stories')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoinAndSelect('moments.country', 'm_country')
      .leftJoinAndSelect('stories.country', 's_country')
      .leftJoinAndSelect('users.notices', 'notices')
      .where('users.email= :email', { email })
      .getOne();

    if (!user) {
      throw new UnauthorizedException(
        '유저정보가 없습니다. 다시한번 확인해주세요.',
      );
    }
    return user;
  }

  async getUserInfoById(userId: number) {
    const user = await this.userRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.likeStory', 'likeStory')
      .leftJoinAndSelect('users.likeMoment', 'likeMoment')
      .leftJoinAndSelect('users.stories', 'stories')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoinAndSelect('users.visited', 'visited')
      .leftJoinAndSelect('moments.country', 'm_country')
      .leftJoinAndSelect('stories.country', 's_country')
      .leftJoinAndSelect('users.comments', 'com')
      .leftJoinAndSelect('com.moment', 'cm_moment')
      .leftJoinAndSelect('com.story', 'cm_story')
      .leftJoinAndSelect('users.notices', 'notices')
      .where('users.id= :id', { id: userId })
      .getOne();

    if (!user) {
      throw new NotFoundException(
        '유저정보가 없습니다. 다시한번 확인해주세요.',
      );
    }
    return user;
  }

  async signUp(email: string, name: string, password: string) {
    if (!email) {
      throw new BadRequestException('이메일을 작성해주세요.');
    }
    if (!name) {
      throw new BadRequestException('이름을 입력해주세요.');
    }
    if (!password) {
      throw new BadRequestException('비밀번호를 작성해주세요.');
    }
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new UnauthorizedException('누군가 사용하고있는 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.userRepository.save({
      email,
      name,
      password: hashedPassword,
      introduce: `안녕하세요. ${name} 입니다.`,
    });
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
