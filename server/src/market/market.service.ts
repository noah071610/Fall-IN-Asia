import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';

@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(MarketPosts)
    private marketPostsRepository: Repository<MarketPosts>,
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async getOnePost(id: number, group: string) {}

  async getPreviewPosts() {}

  async getMarketPosts(group: string) {}

  async createPost(data: any) {}

  async editPost(data: any) {}

  async comparePasswordForAuth(data: { password: string; userId: number }) {}

  async deletePost(postId: number) {}

  async searchPostByPostId(postId: number) {}
}
