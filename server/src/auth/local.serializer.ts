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
      .leftJoinAndSelect('users.stories', 'stories')
      .leftJoinAndSelect('users.moments', 'moments')
      .leftJoinAndSelect('moments.notices', 'c_announce')
      .leftJoinAndSelect('stories.notices', 's_announce')
      .leftJoinAndSelect('users.comments', 'com')
      .leftJoinAndSelect('com.moment', 'cm_moment')
      .leftJoinAndSelect('com.moment', 'cm_story')
      .leftJoinAndSelect('users.notices', 'announce')
      .where('users.id = :userId', { userId: +userId })
      .getOne()
      .then((user) => {
        done(null, user);
      })
      .catch((error) => done(error));
  }
}
