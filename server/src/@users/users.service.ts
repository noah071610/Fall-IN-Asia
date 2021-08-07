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
import { Notices } from 'src/entities/Notices';
import { AuthNum } from 'src/entities/AuthNum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private UserRepository: Repository<Users>,
    @InjectRepository(Follow) private FollowRepository: Repository<Follow>,
    @InjectRepository(Notices)
    private NoticesRepository: Repository<Notices>,
    @InjectRepository(AuthNum)
    private AuthNumRepository: Repository<AuthNum>,
  ) {}

  async findUserInfoByEmail(email: string) {
    const user = await this.UserRepository.createQueryBuilder('users')
      .addSelect([
        'likeComment.commentId',
        'likeMoment.momentId',
        'likeStory.storyId',
      ])
      .leftJoin('users.likeStory', 'likeStory')
      .leftJoin('users.likeMoment', 'likeMoment')
      .leftJoin('users.likeComment', 'likeComment')
      .leftJoinAndSelect('users.notices', 'notices')
      .leftJoinAndSelect('users.followings', 'followings')
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
      .addSelect([
        'stories.code',
        'stories.title',
        'stories.lat',
        'stories.lng',
        'stories.region',
        'stories.thumbnail',
        'stories.id',
        'comments.id',
        'likedUser.id',
        's_country.code',
        's_country.flag_src',
        's_country.name',
        's_user.name',
        's_user.icon',
        's_user.id',
        'm_country.code',
        'm_country.name',
        'following.icon',
        'following.name',
        'follower.icon',
        'follower.name',
      ])
      .leftJoin('users.stories', 'stories')
      .leftJoin('stories.comments', 'comments')
      .leftJoin('stories.likedUser', 'likedUser')
      .leftJoin('stories.country', 's_country')
      .leftJoin('stories.user', 's_user')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoin('moments.country', 'm_country')
      .leftJoinAndSelect('users.notices', 'notices')
      .leftJoinAndSelect('users.followings', 'followings')
      .leftJoinAndSelect('users.followers', 'followers')
      .leftJoin('followings.following', 'following')
      .leftJoin('followers.follower', 'follower')
      .where('users.id= :id', { id: userId })
      .getOne();

    if (!user) {
      throw new NotFoundException(
        '유저정보가 없습니다. 다시한번 확인해주세요.',
      );
    }
    return user;
  }

  async signUp(email: string, name: string, password: string, authNum: string) {
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
    const emailAuthNum = await this.AuthNumRepository.findOne({
      where: { email, authNum: parseInt(authNum) },
    });
    if (!emailAuthNum) {
      throw new BadRequestException(
        '이메일과 인증번호가 다릅니다. 다시한번 확인해주세요.',
      );
    } else {
      await this.AuthNumRepository.delete(emailAuthNum);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await this.UserRepository.save({
      email,
      name,
      password: hashedPassword,
      introduce: `안녕하세요. ${name} 입니다.`,
    });
    return true;
  }

  async googleLogin(req) {
    const user = await this.UserRepository.findOne({
      where: { email: req.email },
      select: ['id', 'icon', 'email'],
    });
    if (!user) {
      const newUser = new Users();
      newUser.email = req.email;
      newUser.icon = req.photo;
      newUser.name = req.name;
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

  async confirmPassword(userId: number, password: string) {
    const user = await this.UserRepository.findOne({
      select: ['id', 'icon', 'email', 'password'],
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('유저를 찾지 못했습니다.');
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      return true;
    } else {
      throw new UnauthorizedException(
        '비밀번호가 일치하지 않습니다. 다시한번 확인해주세요.',
      );
    }
  }

  async changeUserPassword(userId: number, newPassword: string) {
    const user = await this.UserRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('유저를 찾지 못했습니다.');
    }
    const myNewPassword = await bcrypt.hash(newPassword, 12);
    user.password = myNewPassword;
    return await this.UserRepository.save(user);
  }

  async deleteUser(userId: number) {
    return await this.UserRepository.delete({
      id: userId,
    });
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

  async readNotice(userId: number) {
    const notices = await this.NoticesRepository.find({
      where: { userId },
    });
    if (!notices) {
      return true;
    }
    notices.forEach((v) => {
      if (v.readAt === null) {
        v.readAt = new Date();
      }
    });
    await this.NoticesRepository.save(notices);
    return true;
  }

  async deleteNotice(noticeId: number, userId: number) {
    return await this.NoticesRepository.delete({
      id: noticeId,
      userId: userId,
    });
  }
}
