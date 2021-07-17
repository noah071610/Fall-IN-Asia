import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from 'src/entities/Users';
import { Announcements } from 'src/entities/Announcements';
@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(MarketPosts)
    private marketPostsRepository: Repository<MarketPosts>,
    @InjectRepository(Images)
    private imagesRepository: Repository<Images>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Announcements)
    private announcementsRepository: Repository<Announcements>,
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

  async getMarketSearchPosts(searchWord: string) {
    const marketPosts = this.marketPostsRepository
      .createQueryBuilder('mp')
      .where('mp.title like :title', { title: '%' + searchWord + '%' })
      .orWhere('mp.content like :content', { content: '%' + searchWord + '%' })
      .leftJoinAndSelect('mp.user', 'user')
      .leftJoinAndSelect('mp.images', 'images')
      .getMany();
    return marketPosts;
  }

  async getMarketTypePosts(keyword: string, area: string) {
    if (keyword === 'タイプ全部' && area === '全国') {
      const marketPosts = this.marketPostsRepository.find({
        relations: ['user', 'images'],
        order: { id: 'DESC' },
        take: 9,
      });
      return marketPosts;
    }
    if (keyword && area === '全国') {
      const marketPosts = this.marketPostsRepository.find({
        where: { keyword },
        relations: ['user', 'images'],
        order: { id: 'DESC' },
        take: 9,
      });
      return marketPosts;
    }
    if (area && keyword === 'タイプ全部') {
      const marketPosts = this.marketPostsRepository.find({
        where: { area },
        relations: ['user', 'images'],
        order: { id: 'DESC' },
        take: 9,
      });
      return marketPosts;
    }
    const marketPosts = this.marketPostsRepository.find({
      where: { keyword, area },
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
    await this.announcementsRepository.save({
      userId: id,
      marketPostId: newPost.id,
      content: `${data.title}...を登録致しました。`,
    });
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
    await this.marketPostsRepository.delete({ id: postId });
    return true;
  }

  async searchPostByPostId(postId: number) {}
}
