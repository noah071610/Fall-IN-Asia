import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Announcements } from 'src/entities/Announcements';
import { Images } from 'src/entities/Images';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Users } from 'src/entities/Users';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MarketPosts, Users, Images, Announcements]),
  ],
  providers: [MarketService],
  controllers: [MarketController],
})
export class MarketModule {}
