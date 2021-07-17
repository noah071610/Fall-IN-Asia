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
      .leftJoinAndSelect('users.clubPosts', 'cp')
      .leftJoinAndSelect('cp.announcements', 'cpance')
      .leftJoinAndSelect('users.marketPosts', 'mp')
      .leftJoinAndSelect('mp.announcements', 'mpance')
      .leftJoinAndSelect('users.studyPosts', 'sp')
      .leftJoinAndSelect('sp.announcements', 'spance')
      .leftJoinAndSelect('users.comments', 'com')
      .leftJoinAndSelect('com.post', 'cmInpost')
      .leftJoinAndSelect('users.fan', 'fan')
      .leftJoinAndSelect('users.participates', 'ptcp')
      .leftJoinAndSelect('ptcp.studyPost', 'ptcpsp')
      .leftJoinAndSelect('ptcpsp.leaderUser', 'leader')
      .leftJoinAndSelect('users.announcements', 'anuc')
      .leftJoinAndSelect('users.chatToUser', 'ctu')
      .where('users.id = :userId', { userId: +userId })
      .getOne()
      .then((user) => {
        done(null, user);
      })
      .catch((error) => done(error));
  }
}
