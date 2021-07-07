import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Users } from 'src/entities/Users';
import { MarketService } from './market.service';

@Module({
  imports: [TypeOrmModule.forFeature([MarketPosts, Users])],
  providers: [MarketService],
})
export class MarketModule {}
