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
import { MomentCreateRequestDto, MomentModifyRequestDto } from './moments.dto';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

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

  async createPost(
    form: MomentCreateRequestDto,
    userId: number,
    files: Express.MulterS3.File[],
  ) {
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
      newImage.image_src = files[i].location;
      newImage.moment = <any>newPost.id;
      await this.ImagesRepository.save(newImage);
    }
    await this.NoticesRepository.save({
      header: `${country.name}/모멘트`,
      code: newPost.code,
      userId: userId,
      momentId: newPost.id,
      content: `${form.content
        .slice(0, 30)
        .replace(/(<([^>]+)>)/gi, '')
        .replace(/&.*;/gi, '')
        .slice(0, 11)}...을 작성했습니다.`,
    });
    return { momentId: newPost.id };
  }

  async saveImage(file: Express.MulterS3.File) {
    if (!file) {
      throw new NotFoundException('사용 할 이미지가 없습니다.');
    }
    const newImage = new Images();
    newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
    await this.ImagesRepository.save(newImage);
    return true;
  }

  async getOnePost(momentId: number, code: string, viewCount?: string) {
    const post = await this.MomentsRepository.createQueryBuilder('moments')
      .addSelect([
        'images.image_src',
        'country.name',
        'user.name',
        'user.icon',
        'user.id',
        'likedUser.id',
      ])
      .leftJoin('moments.country', 'country')
      .leftJoin('moments.user', 'user')
      .leftJoin('moments.images', 'images')
      .leftJoin('moments.likedUser', 'likedUser')
      .where('moments.id= :id', { id: momentId })
      .andWhere('moments.code= :code', { code })
      .getOne();

    if (!post) {
      throw new NotFoundException('가져올 게시물이 없습니다.');
    }
    if (post && viewCount) {
      await this.MomentsRepository.createQueryBuilder('moments')
        .update()
        .set({
          hit: () => 'hit + 1',
        })
        .where('id = :id', { id: momentId })
        .execute();
    }
    return post;
  }

  async getLatestPosts() {
    const latestPosts = await this.MomentsRepository.createQueryBuilder(
      'moments',
    )
      .addSelect(['country.name', 'user.name', 'user.icon'])
      .leftJoin('moments.country', 'country')
      .leftJoin('moments.user', 'user')
      .orderBy('moments.id', 'DESC')
      .take(3)
      .getMany();
    if (!latestPosts) {
      throw new NotFoundException('가져올 게시물이 없습니다.');
    }
    return latestPosts;
  }

  async getFilterPosts(
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
      .addSelect([
        'country.name',
        'user.id',
        'user.icon',
        'user.name',
        'likedUser.id',
        'comments.id',
      ])
      .leftJoin('moments.country', 'country')
      .leftJoin('moments.user', 'user')
      .leftJoin('moments.likedUser', 'likedUser')
      .leftJoin('moments.comments', 'comments')
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
      case 'view':
        return filterPosts
          .sort((a, b) => b.hit - a.hit)
          .slice((page - 1) * 10, page * 10);
    }
  }

  async getPosts(code?: string, page?: number, type?: string) {
    const posts = await this.MomentsRepository.createQueryBuilder('moments')
      .where(code ? `moments.code = :code` : '1=1', { code })
      .andWhere(type ? `moments.type = :type` : '1=1', { type })
      .addSelect([
        'country.name',
        'user.id',
        'user.icon',
        'user.name',
        'likedUser.id',
        'comments.id',
      ])
      .leftJoin('moments.country', 'country')
      .leftJoin('moments.user', 'user')
      .leftJoin('moments.likedUser', 'likedUser')
      .leftJoin('moments.comments', 'comments')
      .leftJoinAndSelect('moments.images', 'images')
      .orderBy('moments.id', 'DESC')
      .skip((page - 1) * 10)
      .take(10)
      .getMany();

    if (!posts) {
      throw new NotFoundException('모멘트를 찾을 수 없습니다.');
    }
    return posts;
  }

  async getPostsById(code: string, page: number, id: string) {
    const posts = await this.MomentsRepository.createQueryBuilder('moments')
      .where('moments.code= :code', { code })
      .andWhere('moments.id < :id', { id })
      .addSelect([
        'country.name',
        'user.id',
        'user.icon',
        'user.name',
        'likedUser.id',
        'comments.id',
      ])
      .leftJoin('moments.country', 'country')
      .leftJoin('moments.user', 'user')
      .leftJoin('moments.likedUser', 'likedUser')
      .leftJoin('moments.comments', 'comments')
      .leftJoinAndSelect('moments.images', 'images')
      .orderBy('moments.id', 'DESC')
      .skip((page - 1) * 10)
      .take(10)
      .getMany();
    if (!posts) {
      throw new NotFoundException('모멘트를 찾을 수 없습니다.');
    }
    return posts;
  }

  async editPost(
    form: MomentModifyRequestDto,
    files: Express.MulterS3.File[],
    userId: number,
  ) {
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const editPost = await this.MomentsRepository.findOne({
      where: { id: form.momentId },
    });
    editPost.content = form.content;
    editPost.type = form.type;
    if (!editPost) {
      throw new NotFoundException('수정 할 게시물이 없습니다.');
    }

    await this.ImagesRepository.delete({
      moment: <any>editPost.id,
    });

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const newImage = new Images();
        newImage.image_src = files[i].location;
        newImage.moment = <any>editPost.id;
        await this.ImagesRepository.save(newImage);
      }
    }
    if (form.prevImage) {
      for (let i = 0; i < form.prevImage.length; i++) {
        const newImage = new Images();
        newImage.image_src = form.prevImage[i];
        newImage.moment = <any>editPost.id;
        await this.ImagesRepository.save(newImage);
      }
    }
    await this.MomentsRepository.save(editPost);
    await this.NoticesRepository.save({
      header: `${country.name}/모멘트`,
      code: form.code,
      userId,
      momentId: parseInt(form.momentId),
      content: `${form.momentId}번 모멘트를 수정했습니다.`,
    });
    return { momentId: parseInt(form.momentId) };
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
