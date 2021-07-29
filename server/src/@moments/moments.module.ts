import { Module } from '@nestjs/common';
import { MomentsService } from './moments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moments } from 'src/entities/Moments';
import { Countries } from 'src/entities/Countries';
import { Users } from 'src/entities/Users';
import { Images } from 'src/entities/Images';
import { MomentLike } from 'src/entities/MomentLike';
import { Notices } from 'src/entities/Notices';
import { MomentsController } from './moments.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Moments,
      Countries,
      Users,
      Images,
      MomentLike,
      Notices,
    ]),
  ],
  providers: [MomentsService],
  controllers: [MomentsController],
})
export class MomentsModule {}
