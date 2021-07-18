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
      .where('users.id = :userId', { userId: +userId })
      .getOne()
      .then((user) => {
        done(null, user);
      })
      .catch((error) => done(error));
  }
}
