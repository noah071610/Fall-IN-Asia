import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gallery } from 'src/entities/Gallery';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery) private galleryRepository: Repository<Gallery>,
  ) {}

  async getGalleryPosts() {
    const posts = this.galleryRepository
      .createQueryBuilder('gallery')
      .leftJoinAndSelect('gallery.user', 'users')
      .select([
        'gallery.id',
        'gallery.title',
        'gallery.image',
        'users.name',
        'users.icon',
      ])
      .orderBy('gallery.id', 'DESC')
      .limit(10)
      .getMany();
    return posts;
  }

  async createGalleryPost(
    id: number,
    title: string,
    file: Express.Multer.File,
  ) {
    const newGalleryPost = new Gallery();
    newGalleryPost.image = file.path;
    newGalleryPost.title = title;
    newGalleryPost.user = <any>{ id };
    return await this.galleryRepository.save(newGalleryPost);
  }
}
