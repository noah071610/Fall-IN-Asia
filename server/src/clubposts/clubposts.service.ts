import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClubPosts } from 'src/entities/ClubPosts';
import { Repository } from 'typeorm';

@Injectable()
export class ClubPostsService {
  constructor(
    @InjectRepository(ClubPosts)
    private clubPostsRepository: Repository<ClubPosts>,
  ) {}

  async getClubPosts(group: string) {
    const posts = await this.clubPostsRepository.find({
      where: { club: group },
      order: { createdAt: 'ASC' },
      take: 10,
    });
    return posts;
  }
}
