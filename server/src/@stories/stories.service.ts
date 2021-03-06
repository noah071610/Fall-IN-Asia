import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { Stories } from 'src/entities/Stories';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { Notices } from 'src/entities/Notices';
import { Countries } from 'src/entities/Countries';
import { StoryLike } from 'src/entities/StoryLike';
import { StoryCreateDto, StoryEditDto } from 'src/@stories/stories.dto';

@Injectable()
export class StoriesService {
  constructor(
    @InjectRepository(Stories)
    private StoriesRepository: Repository<Stories>,
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>,
    @InjectRepository(Images)
    private ImagesRepository: Repository<Images>,
    @InjectRepository(StoryLike)
    private StoryLikeRepository: Repository<StoryLike>,
    @InjectRepository(Notices)
    private NoticesRepository: Repository<Notices>,
  ) {}

  async createPost(
    form: StoryCreateDto,
    userId: number,
    file: Express.MulterS3.File,
  ) {
    if (!form) {
      throw new NotFoundException('message.error.noDataToPost');
    }
    if (!userId) {
      throw new UnauthorizedException('message.error.noUser');
    }
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const newPostCreate = new Stories();
    newPostCreate.code = form.code;
    newPostCreate.title = form.title;
    newPostCreate.content = form.content;
    newPostCreate.region = form.region;
    newPostCreate.lat = form.lat;
    newPostCreate.lng = form.lng;
    newPostCreate.country = <any>{ id: country.id };
    newPostCreate.user = <any>{ id: userId };
    if (file) {
      newPostCreate.thumbnail = file.location.replace(
        /\/original\//,
        '/thumb/',
      );
    }
    const newPost = await this.StoriesRepository.save(newPostCreate);
    await this.NoticesRepository.save({
      header: `${country.name}/스토리`,
      code: newPost.code,
      userId: userId,
      storyId: newPost.id,
      content: `${form.title.slice(0, 10)}...을 작성했습니다.`,
    });
    return { storyId: newPost.id };
  }

  async saveImage(file: Express.MulterS3.File) {
    if (!file) {
      throw new NotFoundException('message.error.noImage');
    }
    const newImage = new Images();
    newImage.image_src = file.location;
    await this.ImagesRepository.save(newImage);
    return newImage.image_src;
  }

  async getSidePosts(storyId: number, userId: number) {
    const prevPost = await this.StoriesRepository.findOne({
      select: ['thumbnail', 'title', 'code', 'id'],
      where: { user: userId, id: LessThan(storyId) },
    }).then((res) => {
      if (!res) {
        return this.StoriesRepository.findOne({
          select: ['thumbnail', 'title', 'code', 'id'],
          where: { id: LessThan(storyId) },
        });
      } else {
        return res;
      }
    });
    const nextPost = await this.StoriesRepository.findOne({
      select: ['thumbnail', 'title', 'code', 'id'],
      where: { user: userId, id: MoreThan(storyId) },
    }).then((res) => {
      if (!res) {
        return this.StoriesRepository.findOne({
          select: ['thumbnail', 'title', 'code', 'id'],
          where: { id: MoreThan(storyId) },
        });
      } else {
        return res;
      }
    });
    return { prevPost, nextPost };
  }

  async getOnePost(storyId: number, code: string, viewCount?: string) {
    const post = await this.StoriesRepository.findOne({
      where: {
        id: storyId,
        code,
      },
      relations: [
        'user',
        'country',
        'likedUser',
        'images',
        'comments',
        'comments.user',
        'comments.likedUser',
        'comments.subComments',
        'comments.subComments.user',
      ],
    });
    if (!post) {
      throw new NotFoundException('message.error.noPost');
    }

    if (post && viewCount) {
      await this.StoriesRepository.createQueryBuilder('stories')
        .update()
        .set({
          hit: () => 'hit + 1',
        })
        .where('id = :id', { id: storyId })
        .execute();
    }
    return post;
  }

  async getLatestPosts() {
    const latestPosts = await this.StoriesRepository.find({
      relations: ['country', 'user'],
      order: { id: 'DESC' },
      take: 3,
    });
    if (!latestPosts) {
      throw new NotFoundException('message.error.noPost');
    }
    return latestPosts;
  }

  async getFilterPosts(filter: string, code?: string, page?: number) {
    const filterPosts = await this.StoriesRepository.createQueryBuilder(
      'stories',
    )
      .where(code ? `stories.code = :code` : '1=1', { code })
      .leftJoinAndSelect('stories.country', 'country')
      .leftJoinAndSelect('stories.user', 'user')
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.comments', 'comments')
      .leftJoinAndSelect('stories.images', 'images')
      .getMany();
    switch (filter) {
      case 'popular':
        return filterPosts
          .sort((a, b) => b.likedUser.length - a.likedUser.length)
          .slice((page - 1) * 12, page * 12);
      case 'comment':
        return filterPosts
          .sort((a, b) => b.comments.length - a.comments.length)
          .slice((page - 1) * 12, page * 12);
      case 'view':
        return filterPosts
          .sort((a, b) => b.hit - a.hit)
          .slice((page - 1) * 12, page * 12);
    }
  }

  async getPopularPosts(code?: string) {
    const pointWithpostId = await this.StoriesRepository.createQueryBuilder(
      'stories',
    )
      .select([
        'stories.id',
        'stories.hit',
        'likedUser.id as user_len',
        'comments.id as comment_len',
      ])
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.comments', 'comments')
      .where(code ? `stories.code = :code` : '1=1', { code })
      .orderBy('stories.id', 'DESC')
      .take(10)
      .getMany()
      .then((res) => {
        return res
          .map((v) => {
            return {
              id: v.id,
              point: v.hit * 0.001 + v.comments.length + v.likedUser.length * 5,
            };
          })
          .sort((a: any, b: any) => b.point - a.point)
          .splice(0, 4);
      });
    let popularPosts = [];
    for (const i of pointWithpostId) {
      await this.StoriesRepository.findOne({
        where: { id: i.id },
        relations: ['user', 'country', 'likedUser', 'comments'],
      }).then((res) => {
        popularPosts.push(res);
      });
    }

    return popularPosts;
  }

  async getPosts(code?: string, page?: number) {
    const posts = await this.StoriesRepository.createQueryBuilder('stories')
      .leftJoinAndSelect('stories.country', 'country')
      .leftJoinAndSelect('stories.user', 'user')
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.comments', 'comments')
      .leftJoinAndSelect('stories.images', 'images')
      .where(code ? `stories.code = :code` : '1=1', { code })
      .orderBy('stories.id', 'DESC')
      .skip((page - 1) * 12)
      .take(12)
      .getMany();

    return posts;
  }

  async getPostsById(page: number, id: string) {
    const posts = await this.StoriesRepository.createQueryBuilder('stories')
      .andWhere('stories.id < :id', { id })
      .leftJoinAndSelect('stories.country', 'country')
      .leftJoinAndSelect('stories.user', 'user')
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.comments', 'comments')
      .leftJoinAndSelect('stories.images', 'images')
      .orderBy('stories.id', 'DESC')
      .skip((page - 1) * 12)
      .take(12)
      .getMany();
    if (!posts) {
      throw new NotFoundException('message.error.noPost');
    }
    return posts;
  }

  async editPost(
    form: StoryEditDto,
    file: Express.MulterS3.File,
    userId: number,
  ) {
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const editPost = await this.StoriesRepository.findOne({
      where: { id: form.storyId },
    });
    if (!editPost || !country) {
      throw new NotFoundException('message.error.noPostToEdit');
    }
    editPost.code = form.code;
    editPost.title = form.title;
    editPost.content = form.content;
    editPost.region = form.region;
    editPost.lat = form.lat;
    editPost.lng = form.lng;
    editPost.country = <any>{ id: country.id };
    if (file) {
      editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
    }
    await this.StoriesRepository.save(editPost);

    await this.NoticesRepository.save({
      header: `${country.name}/스토리`,
      code: editPost.code,
      userId,
      storyId: editPost.id,
      content: `${form.title.slice(0, 10)}...을 수정했습니다.`,
    });
    return { storyId: parseInt(form.storyId) };
  }

  async likePost(storyId: number, userId: number) {
    if (!storyId) {
      throw new NotFoundException('message.error.noPost');
    }
    if (!userId) {
      throw new UnauthorizedException('message.error.noUser');
    }
    const newPostLike = new StoryLike();
    newPostLike.userId = userId;
    newPostLike.storyId = storyId;
    return await this.StoryLikeRepository.save(newPostLike);
  }

  async dislikePost(storyId: number, userId: number) {
    if (!storyId) {
      throw new NotFoundException('message.error.noPost');
    }
    if (!userId) {
      throw new UnauthorizedException('message.error.noUser');
    }
    return await this.StoryLikeRepository.delete({ storyId, userId });
  }

  async deletePost(storyId: number) {
    if (!storyId) {
      throw new NotFoundException('message.error.noPost');
    }
    return await this.StoriesRepository.delete({
      id: storyId,
    });
  }
}
