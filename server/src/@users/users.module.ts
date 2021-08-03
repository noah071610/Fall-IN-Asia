import { Follow } from 'src/entities/Follow';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from 'src/entities/Users';
import { Notices } from 'src/entities/Notices';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Follow, Notices])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
