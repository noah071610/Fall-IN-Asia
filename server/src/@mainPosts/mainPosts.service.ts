import {
  Injectable,
  NotFoundException,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThan, Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from 'src/entities/Users';
import { Images } from 'src/entities/Images';
import { Announcements } from 'src/entities/Announcements';
import { MainPosts } from 'src/entities/MainPosts';
import { Countries } from 'src/entities/Countries';
import { MainPostLike } from 'src/entities/MainPostsLike';
@Injectable()
export class MainPostsService {
  constructor(
    @InjectRepository(MainPosts)
    private MainPostsRepository: Repository<MainPosts>,
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>,
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
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
      newImage.src = process.env.BACK_URL + files[i].path;
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
    newImage.src = process.env.BACK_URL + file.path;
    await this.ImagesRepository.save(newImage);
    return true;
  }

  async getOnePost(mainPostId: number, code: string) {
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
    return post;
  }

  async getPopularPosts(code: string) {
    const popularPosts = await this.MainPostsRepository.createQueryBuilder(
      'mainPosts',
    )
      .leftJoin('mainPosts.likedUser', 'likedUser')
      .orderBy('likedUser');
    return popularPosts;
  }

  async getPosts(code?: string, page?: number, type?: string) {
    if (type) {
      switch (type) {
        case 'attractions':
          type = '관광지';
          break;
        case 'accommodations':
          type = '숙박';
          break;
        case 'food':
          type = '음식';
          break;
        case 'alert':
          type = '사기경보';
          break;
        default:
          break;
      }
    }
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
    const deletedPost = await this.MainPostsRepository.delete({
      id: mainPostId,
    });
    if (!deletedPost) {
      throw new NotFoundException('삭제 할 게시물이 없습니다.');
    }
    return true;
  }

  async comparePasswordForAuth(password: string, userId: number) {
    const user = await this.UsersRepository.findOne({
      where: { id: userId },
      select: ['password'],
    });
    const conparePassword = await bcrypt.compare(password, user.password);
    if (!conparePassword) {
      throw new UnauthorizedException('비밀번호가 다릅니다.');
    }
    return true;
  }

  // async getVisitClubs(data: string[]) {
  //   const visitClubs = await Promise.all(
  //     data.map(async (v) => {
  //       const group = this.countriesRepository.findOne({
  //         where: { country_name: v },
  //         select: ['country_name', 'group_name'],
  //       });
  //       return group;
  //     }),
  //   );
  //   return visitClubs;
  // }

  // async getPreviewPosts() {
  //   const postCount = await this.mainPostsRepository
  //     .createQueryBuilder('posts')
  //     .select('posts.country_name')
  //     .addSelect('COUNT(*)', 'cnt')
  //     .groupBy('posts.country_name')
  //     .orderBy('cnt', 'DESC')
  //     .getMany();
  //   const topClubWithSixPosts = await Promise.all(
  //     postCount.map(async (v) => {
  //       const posts = await this.mainPostsRepository
  //         .createQueryBuilder('posts')
  //         .select('posts.id')
  //         .addSelect('posts.title')
  //         .where('posts.country_name= :country_name', {
  //           country_name: v.country_name,
  //         })
  //         .orderBy('posts.id', 'DESC')
  //         .limit(6)
  //         .leftJoin('posts.user', 'users')
  //         .addSelect(['users.name'])
  //         .getRawMany();
  //       const group = await this.countriesRepository.findOne({
  //         where: { country_name: v.country_name },
  //         select: ['group_name', 'country_name'],
  //       });

  //       return { ...group, posts };
  //     }),
  //   );

  //   return topClubWithSixPosts;
  // }

  // async getClubPagePosts(group: string, postId: number) {
  //   const groupName = await this.countriesRepository.findOne({
  //     where: { country_name: group },
  //     select: ['group_name', 'id'],
  //   });

  //   const prevPosts = await this.mainPostsRepository.find({
  //     where: { country_name: group, id: MoreThan(postId) },
  //     relations: ['user'],
  //     order: { id: 'DESC' },
  //     take: 4,
  //   });

  //   const nextPosts = await this.mainPostsRepository.find({
  //     where: { country_name: group, id: LessThanOrEqual(postId) },
  //     relations: ['user'],
  //     order: { id: 'DESC' },
  //     take: 6,
  //   });
  //   return {
  //     name: groupName.group_name,
  //     posts: [prevPosts.concat(nextPosts), 10],
  //   };
  // }
}
