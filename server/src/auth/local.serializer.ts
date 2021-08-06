import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/Users';
import { AuthService } from './auth.service';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {
    super();
  }

  serializeUser(user: Users, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.usersRepository
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.likeStory', 'likeStory')
      .leftJoinAndSelect('users.likeMoment', 'likeMoment')
      .leftJoinAndSelect('users.likeComment', 'likeComment')
      .leftJoinAndSelect('users.stories', 'stories')
      .leftJoinAndSelect('users.notices', 'notices')
      .leftJoinAndSelect('users.followings', 'followings')
      .leftJoinAndSelect('users.followers', 'followers')
      .leftJoinAndSelect('stories.comments', 'comments')
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.country', 's_country')
      .leftJoinAndSelect('stories.user', 's_user')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoinAndSelect('moments.country', 'm_country')
      .leftJoinAndSelect('followings.following', 'following')
      .leftJoinAndSelect('followers.follower', 'follower')
      .where('users.id = :userId', { userId: +userId })
      .getOne()
      .then((user) => {
        done(null, user);
      })
      .catch((error) => done(error));
  }
}
