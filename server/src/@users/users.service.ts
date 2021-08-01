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
import { Follow } from 'src/entities/Follow';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private UserRepository: Repository<Users>,
    @InjectRepository(Follow) private FollowRepository: Repository<Follow>,
  ) {}

  async findUserInfoByEmail(email: string) {
    const user = await this.UserRepository.createQueryBuilder('users')
      .leftJoinAndSelect('users.likeStory', 'likeStory')
      .leftJoinAndSelect('users.likeMoment', 'likeMoment')
      .leftJoinAndSelect('users.likeComment', 'likeComment')
      .leftJoinAndSelect('users.stories', 'stories')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoinAndSelect('users.followings', 'followings')
      .leftJoinAndSelect('users.followers', 'followers')
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
    const user = await this.UserRepository.createQueryBuilder('users')
      .leftJoinAndSelect('users.stories', 'stories')
      .leftJoinAndSelect('stories.comments', 'comments')
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.country', 's_country')
      .leftJoinAndSelect('stories.user', 's_user')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoinAndSelect('moments.country', 'm_country')
      .leftJoinAndSelect('users.followings', 'followings')
      .leftJoinAndSelect('users.followers', 'followers')
      .leftJoinAndSelect('followings.following', 'following')
      .leftJoinAndSelect('followers.follower', 'follower')
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
    const user = await this.UserRepository.findOne({ where: { email } });
    if (user) {
      throw new UnauthorizedException('누군가 사용하고있는 이메일입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.UserRepository.save({
      email,
      name,
      password: hashedPassword,
      introduce: `안녕하세요. ${name} 입니다.`,
    });
  }

  async addUserIcon(userId: number, file: Express.Multer.File) {
    const user = await this.UserRepository.findOne({
      where: { id: userId },
    });
    user.icon = process.env.BACK_URL + file.path;
    return await this.UserRepository.save(user);
  }

  async deleteUserIcon(userId: number) {
    const user = await this.UserRepository.findOne({
      where: { id: userId },
    });
    user.icon =
      'https://user-images.githubusercontent.com/74864925/124331496-460bfe80-dbca-11eb-95dc-a5379a5750a6.png';
    return await this.UserRepository.save(user);
  }

  async changeUserInfo(userId: number, form) {
    const user = await this.UserRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('유저를 찾지 못했습니다.');
    }
    user.name = form.userName;
    user.introduce = form.introduce;
    return await this.UserRepository.save(user);
  }

  async changeUserPassword(userId: number, form) {
    const user = await this.UserRepository.findOne({
      select: ['id', 'icon', 'email', 'password'],
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('유저를 찾지 못했습니다.');
    }
    const result = await bcrypt.compare(form.prevPassword, user.password);
    if (result) {
      const mynewPassword = await bcrypt.hash(form.newPassword, 12);
      user.password = mynewPassword;
      await this.UserRepository.save(user);
      return true;
    } else {
      throw new UnauthorizedException(
        '비밀번호가 일치하지 않습니다. 다시한번 확인해주세요.',
      );
    }
  }

  async followUser(followingId: number, userId: number) {
    if (!followingId) {
      throw new NotFoundException('팔로우 할 유저를 찾지 못했습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    const newFollower = new Follow();
    newFollower.followerId = userId;
    newFollower.followingId = followingId;
    return await this.FollowRepository.save(newFollower);
  }

  async unfollowUser(followingId: number, userId: number) {
    if (!followingId) {
      throw new NotFoundException('언팔로우를 할 유저를 찾지 못했습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    return await this.FollowRepository.delete({
      followingId,
      followerId: userId,
    });
  }
}
