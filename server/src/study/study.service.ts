import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from 'src/entities/Users';
import { StudyPosts } from 'src/entities/StudyPosts';
import { Participate } from 'src/entities/Participate';
import { Announcements } from 'src/entities/Announcements';
@Injectable()
export class StudyService {
  constructor(
    @InjectRepository(StudyPosts)
    private studyPostsRepository: Repository<StudyPosts>,
    @InjectRepository(Images)
    private imagesRepository: Repository<Images>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Participate)
    private participateRepository: Repository<Participate>,
    @InjectRepository(Announcements)
    private announcementsRepository: Repository<Announcements>,
  ) {}

  async getTypePosts(type: string) {
    const typePosts = () => {
      if (type === 'レッスン' || type === '韓国語勉強俱楽部') {
        return this.studyPostsRepository.find({
          where: { type },
          relations: ['leaderUser'],
          take: 8,
        });
      } else {
        return this.studyPostsRepository.find({
          where: { area: type },
          relations: ['leaderUser'],
          take: 8,
        });
      }
    };
    return typePosts();
  }

  async getStudyPosts() {
    const studyPosts = await this.studyPostsRepository.find({
      order: { id: 'DESC' },
      relations: ['leaderUser'],
      take: 8,
    });

    return studyPosts;
  }

  async getImageForPost(file: Express.Multer.File) {
    const image = new Images();
    image.src = process.env.BACK_URL + file.path;
    return await this.imagesRepository.save(image);
  }

  async createStudyPost(id: number, data: any) {
    const newPostCreate = new StudyPosts();
    newPostCreate.title = data.title;
    newPostCreate.content = data.content;
    newPostCreate.area = data.area;
    newPostCreate.type = data.type;
    newPostCreate.leaderUser = <any>{ id };
    const newPost = await this.studyPostsRepository.save(newPostCreate);
    await this.announcementsRepository.save({
      userId: id,
      studyPostId: newPost.id,
      content: `${data.title}...を登録致しました。`,
    });
    await this.participateRepository.save({
      studyPostId: newPost.id,
      userId: id,
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
    await this.studyPostsRepository.delete({ id: postId });
    return true;
  }

  async searchPostByPostId(postId: number) {}
}
