import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gallery } from 'src/entities/Gallery';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery])],
  providers: [GalleryService],
  controllers: [GalleryController],
})
export class GalleryModule {}
