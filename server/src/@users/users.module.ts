import { Follow } from 'src/entities/Follow';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from 'src/entities/Users';
import { Notices } from 'src/entities/Notices';
import { AuthNum } from 'src/entities/AuthNum';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Follow, Notices, AuthNum])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
