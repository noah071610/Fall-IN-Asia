import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { MarketPosts } from 'src/entities/MarketPosts';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from 'src/entities/Users';
import { StudyPosts } from 'src/entities/StudyPosts';
import { Participate } from 'src/entities/Participate';
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
  ) {}

  async getOnePostById(id: number) {
    const studyPost = this.studyPostsRepository.findOne({
      where: { id },
    });
    return studyPost;
  }

  async getStudyPosts() {
    const studyPosts = await this.studyPostsRepository.find({
      order: { id: 'DESC' },
      relations: ['leaderUser'],
      take: 8,
    });

    return studyPosts;
  }

  async createStudyPost(id: number, data: any, files: Express.Multer.File[]) {
    const newPostCreate = new StudyPosts();
    newPostCreate.title = data.title;
    newPostCreate.content = data.content;
    newPostCreate.area = data.area;
    newPostCreate.type = data.type;
    newPostCreate.leaderUser = <any>{ id };
    const newPost = await this.studyPostsRepository.save(newPostCreate);
    for (let i = 0; i < files.length; i++) {
      const newImage = new Images();
      newImage.src = process.env.BACK_URL + files[i].path;
      newImage.studyPost = <any>newPost.id;
      await this.imagesRepository.save(newImage);
    }
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
    await this.imagesRepository.delete({
      marketPost: <any>postId,
    });
    await this.studyPostsRepository.delete({ id: postId });
    return true;
  }

  async searchPostByPostId(postId: number) {}
}
