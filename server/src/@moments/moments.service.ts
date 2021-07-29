import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Images } from 'src/entities/Images';
import { Notices } from 'src/entities/Notices';
import { Moments } from 'src/entities/Moments';
import { Countries } from 'src/entities/Countries';
import { MomentLike } from 'src/entities/MomentLike';
import { InjectRepository } from '@nestjs/typeorm';
const viewObj = new Object();

@Injectable()
export class MomentsService {
  constructor(
    @InjectRepository(Moments)
    private MomentsRepository: Repository<Moments>,
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>,
    @InjectRepository(Images)
    private ImagesRepository: Repository<Images>,
    @InjectRepository(MomentLike)
    private MomentLikeRepository: Repository<MomentLike>,
    @InjectRepository(Notices)
    private NoticesRepository: Repository<Notices>,
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
    const newPostCreate = new Moments();
    newPostCreate.code = form.code;
    newPostCreate.content = form.content;
    newPostCreate.type = form.type;
    newPostCreate.country = <any>{ id: country.id };
    newPostCreate.user = <any>{ id: userId };
    const newPost = await this.MomentsRepository.save(newPostCreate);
    for (let i = 0; i < files.length; i++) {
      const newImage = new Images();
      newImage.image_src = process.env.BACK_URL + files[i].path;
      newImage.moment = <any>newPost.id;
      await this.ImagesRepository.save(newImage);
    }
    await this.NoticesRepository.save({
      header: `${country.name}/포스트`,
      code: newPost.code,
      userId: userId,
      momentId: newPost.id,
      content: `${form.content
        .slice(0, 30)
        .replace(/(<([^>]+)>)/gi, '')
        .replace(/&.*;/gi, '')
        .slice(0, 11)}...을 작성했습니다.`,
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

  async getOnePost(momentId: number, code: string, ip: number) {
    const post = await this.MomentsRepository.findOne({
      where: {
        id: momentId,
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
      if (!viewObj[momentId]) {
        viewObj[momentId] = [];
      }
      if (viewObj[momentId].indexOf(ip) == -1) {
        viewObj[momentId].push(ip);
        await this.MomentsRepository.createQueryBuilder('moments')
          .update('moments')
          .set({
            hit: () => 'hit + 1',
          })
          .where('id = :id', { id: momentId, code })
          .execute();
        setTimeout(() => {
          viewObj[momentId].splice(viewObj[momentId].indexOf(ip), 1);
        }, 600000);
      }
    }
    return post;
  }

  async getLatestPosts() {
    const latestPosts = await this.MomentsRepository.find({
      relations: ['user', 'country'],
      order: { id: 'DESC' },
      take: 2,
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
    const filterPosts = await this.MomentsRepository.createQueryBuilder(
      'moments',
    )
      .where(code ? `moments.code = :code` : '1=1', { code })
      .andWhere(type ? `moments.type = :type` : '1=1', { type })
      .leftJoinAndSelect('moments.country', 'country')
      .leftJoinAndSelect('moments.user', 'user')
      .leftJoinAndSelect('moments.likedUser', 'likedUser')
      .leftJoinAndSelect('moments.comments', 'comments')
      .leftJoinAndSelect('moments.images', 'images')
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
    const posts = await this.MomentsRepository.createQueryBuilder('moments')
      .where(code ? `moments.code = :code` : '1=1', { code })
      .andWhere(type ? `moments.type = :type` : '1=1', { type })
      .leftJoinAndSelect('moments.country', 'country')
      .leftJoinAndSelect('moments.user', 'user')
      .leftJoinAndSelect('moments.likedUser', 'likedUser')
      .leftJoinAndSelect('moments.comments', 'comments')
      .leftJoinAndSelect('moments.images', 'images')
      .orderBy('moments.id', 'DESC')
      .skip((page - 1) * 10)
      .take(10)
      .getMany();

    return posts;
  }

  async editPost(form: any, files: Express.Multer.File[]) {
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const editedPost = await this.MomentsRepository.createQueryBuilder(
      'moments',
    )
      .update('moments')
      .set({
        type: form.type,
        content: form.content,
        code: form.code,
        country: <any>{ id: country.id },
      })
      .where('id = :id', { id: parseInt(form.momentId) })
      .execute();
    if (!editedPost) {
      throw new NotFoundException('수정 할 게시물이 없습니다.');
    }
    return true;
  }

  async likePost(momentId: number, userId: number) {
    if (!momentId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    const newPostLike = new MomentLike();
    newPostLike.userId = userId;
    newPostLike.momentId = momentId;
    return await this.MomentLikeRepository.save(newPostLike);
  }

  async dislikePost(momentId: number, userId: number) {
    if (!momentId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    return await this.MomentLikeRepository.delete({ momentId, userId });
  }

  async deletePost(momentId: number) {
    if (!momentId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    return await this.MomentsRepository.delete({
      id: momentId,
    });
  }
}
