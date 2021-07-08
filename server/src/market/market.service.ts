import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from 'src/entities/Users';
@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(MarketPosts)
    private marketPostsRepository: Repository<MarketPosts>,
    @InjectRepository(Images)
    private imagesRepository: Repository<Images>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getOnePostById(id: number) {
    const marketPosts = this.marketPostsRepository.findOne({
      where: { id },
      relations: ['user', 'images'],
    });
    return marketPosts;
  }

  async getMarketPosts() {
    const marketPosts = this.marketPostsRepository.find({
      relations: ['user', 'images'],
      order: { id: 'DESC' },
      take: 9,
    });
    return marketPosts;
  }

  async createPost(id: number, data: any, files: Express.Multer.File[]) {
    const newPostCreate = new MarketPosts();
    newPostCreate.title = data.title;
    newPostCreate.content = data.content;
    newPostCreate.area = data.area;
    newPostCreate.keyword = data.keyword;
    newPostCreate.user = <any>{ id };
    const newPost = await this.marketPostsRepository.save(newPostCreate);
    for (let i = 0; i < files.length; i++) {
      const newImage = new Images();
      newImage.src = process.env.BACK_URL + files[i].path;
      newImage.marketPost = <any>newPost.id;
      await this.imagesRepository.save(newImage);
    }
    return true;
  }

  async comparePasswordForAuth(data: { password: string; userId: number }) {
    const user = await this.usersRepository.findOne({
      where: { id: data.userId },
      select: ['password'],
    });
    const conparePassword = await bcrypt.compare(data.password, user.password);
    if (!conparePassword) {
      throw new UnauthorizedException('パスワードが違います。');
    }
    return true;
  }

  async deletePost(postId: number) {
    await this.imagesRepository.delete({
      marketPost: <any>postId,
    });
    await this.marketPostsRepository.delete({ id: postId });
    return true;
  }

  async searchPostByPostId(postId: number) {}
}
