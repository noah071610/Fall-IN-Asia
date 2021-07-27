import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Images } from 'src/entities/Images';
import { Announcements } from 'src/entities/Announcements';
import { MainPosts } from 'src/entities/MainPosts';
import { Countries } from 'src/entities/Countries';
import { MainPostLike } from 'src/entities/MainPostsLike';
import { InjectRepository } from '@nestjs/typeorm';
const viewObj = new Object();

@Injectable()
export class MainPostsService {
  constructor(
    @InjectRepository(MainPosts)
    private MainPostsRepository: Repository<MainPosts>,
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>,
    @InjectRepository(Images)
    private ImagesRepository: Repository<Images>,
    @InjectRepository(MainPostLike)
    private MainPostLikeRepository: Repository<MainPostLike>,
    @InjectRepository(Announcements)
    private AnnouncementsRepository: Repository<Announcements>,
  ) {}

  async createPost(form: any, userId: number, files: Express.Multer.File[]) {
    if (!form) {
      throw new NotFoundException('작성 할 데이터가 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const newPostCreate = new MainPosts();
    newPostCreate.code = form.code;
    newPostCreate.content = form.content;
    newPostCreate.type = form.type;
    newPostCreate.country = <any>{ id: country.id };
    newPostCreate.user = <any>{ id: userId };
    const newPost = await this.MainPostsRepository.save(newPostCreate);
    for (let i = 0; i < files.length; i++) {
      const newImage = new Images();
      newImage.image_src = process.env.BACK_URL + files[i].path;
      newImage.mainPost = <any>newPost.id;
      await this.ImagesRepository.save(newImage);
    }
    await this.AnnouncementsRepository.save({
      userId: userId,
      mainPostId: newPost.id,
      content: `${form.content.slice(10)}...을 작성했습니다.`,
    });
    return true;
  }

  async saveImage(file: Express.Multer.File) {
    if (!file) {
      throw new NotFoundException('사용 할 이미지가 없습니다.');
    }
    const newImage = new Images();
    newImage.image_src = process.env.BACK_URL + file.path;
    await this.ImagesRepository.save(newImage);
    return true;
  }

  async getOnePost(mainPostId: number, code: string, ip: number) {
    const post = await this.MainPostsRepository.findOne({
      where: {
        id: mainPostId,
        code,
      },
      relations: [
        'user',
        'country',
        'likedUser',
        'images',
        'comments',
        'comments.user',
        'comments.subComments',
        'comments.subComments.user',
      ],
    });
    if (!post) {
      throw new NotFoundException('가져올 게시물이 없습니다.');
    }
    if (post) {
      if (!viewObj[mainPostId]) {
        viewObj[mainPostId] = [];
      }
      if (viewObj[mainPostId].indexOf(ip) == -1) {
        viewObj[mainPostId].push(ip);
        await this.MainPostsRepository.createQueryBuilder('mainPosts')
          .update('mainPosts')
          .set({
            hit: () => 'hit + 1',
          })
          .where('id = :id', { id: mainPostId, code })
          .execute();
        setTimeout(() => {
          viewObj[mainPostId].splice(viewObj[mainPostId].indexOf(ip), 1);
        }, 600000);
      }
    }
    return post;
  }

  async getLatestPosts() {
    const latestPosts = await this.MainPostsRepository.find({
      relations: ['user', 'country'],
      order: { id: 'DESC' },
      take: 5,
    });
    if (!latestPosts) {
      throw new NotFoundException('가져올 게시물이 없습니다.');
    }
    return latestPosts;
  }

  async getCommentPosts(
    filter: string,
    code?: string,
    type?: string,
    page?: number,
  ) {
    const filterPosts = await this.MainPostsRepository.createQueryBuilder(
      'mainPosts',
    )
      .where(code ? `mainPosts.code = :code` : '1=1', { code })
      .andWhere(type ? `mainPosts.type = :type` : '1=1', { type })
      .leftJoinAndSelect('mainPosts.country', 'country')
      .leftJoinAndSelect('mainPosts.user', 'user')
      .leftJoinAndSelect('mainPosts.likedUser', 'likedUser')
      .leftJoinAndSelect('mainPosts.comments', 'comments')
      .leftJoinAndSelect('mainPosts.images', 'images')
      .getMany();
    switch (filter) {
      case 'popular':
        return filterPosts
          .sort((a, b) => b.likedUser.length - a.likedUser.length)
          .slice((page - 1) * 10, page * 10);
      case 'comment':
        return filterPosts
          .sort((a, b) => b.comments.length - a.comments.length)
          .slice((page - 1) * 10, page * 10);
    }
  }

  async getPosts(code?: string, page?: number, type?: string) {
    const posts = await this.MainPostsRepository.createQueryBuilder('mainPosts')
      .where(code ? `mainPosts.code = :code` : '1=1', { code })
      .andWhere(type ? `mainPosts.type = :type` : '1=1', { type })
      .leftJoinAndSelect('mainPosts.country', 'country')
      .leftJoinAndSelect('mainPosts.user', 'user')
      .leftJoinAndSelect('mainPosts.likedUser', 'likedUser')
      .leftJoinAndSelect('mainPosts.comments', 'comments')
      .leftJoinAndSelect('mainPosts.images', 'images')
      .orderBy('mainPosts.id', 'DESC')
      .skip((page - 1) * 10)
      .take(10)
      .getMany();

    return posts;
  }

  async editPost(form: any, files: Express.Multer.File[]) {
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const editedPost = await this.MainPostsRepository.createQueryBuilder(
      'mainPosts',
    )
      .update('mainPosts')
      .set({
        type: form.type,
        content: form.content,
        code: form.code,
        country: <any>{ id: country.id },
      })
      .where('id = :id', { id: parseInt(form.mainPostId) })
      .execute();
    if (!editedPost) {
      throw new NotFoundException('수정 할 게시물이 없습니다.');
    }
    return true;
  }

  async likePost(mainPostId: number, userId: number) {
    if (!mainPostId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    const newPostLike = new MainPostLike();
    newPostLike.userId = userId;
    newPostLike.mainPostId = mainPostId;
    return await this.MainPostLikeRepository.save(newPostLike);
  }

  async dislikePost(mainPostId: number, userId: number) {
    if (!mainPostId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    return await this.MainPostLikeRepository.delete({ mainPostId, userId });
  }

  async deletePost(mainPostId: number) {
    if (!mainPostId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    return await this.MainPostsRepository.delete({
      id: mainPostId,
    });
  }
}
