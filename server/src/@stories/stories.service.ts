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
const viewObj = new Object();

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
      throw new NotFoundException('작성 할 데이터가 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
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
<<<<<<< HEAD
      newPostCreate.thumbnail = file.location.replace(
        /\/original\//,
        '/thumb/',
      );
=======
      newPostCreate.thumbnail = file.location;
>>>>>>> 8f71fa750c0f8c9c84697c5ea1142b96df06ac6a
    }
    const newPost = await this.StoriesRepository.save(newPostCreate);
    await this.NoticesRepository.save({
      header: `${country.name}/연대기`,
      code: newPost.code,
      userId: userId,
      storyId: newPost.id,
      content: `${form.title.slice(0, 10)}...을 작성했습니다.`,
    });
    return { storyId: newPost.id };
  }

  async saveImage(file: Express.MulterS3.File) {
    if (!file) {
      throw new NotFoundException('사용 할 이미지가 없습니다.');
    }
    const newImage = new Images();
<<<<<<< HEAD
    newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
=======
    newImage.image_src = file.location;
>>>>>>> 8f71fa750c0f8c9c84697c5ea1142b96df06ac6a
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

  async getOnePost(storyId: number, code: string, uuid: string) {
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
      throw new NotFoundException('가져올 게시물이 없습니다.');
    }

    if (post && uuid) {
      if (!viewObj[storyId]) {
        viewObj[storyId] = [];
      }
      if (viewObj[storyId].indexOf(uuid) == -1) {
        viewObj[storyId].push(uuid);
        await this.StoriesRepository.createQueryBuilder('stories')
          .update()
          .set({
            hit: () => 'hit + 1',
          })
          .where('id = :id', { id: storyId })
          .execute();
        setTimeout(() => {
          viewObj[storyId].splice(viewObj[storyId].indexOf(uuid), 1);
        }, 600000);
      }
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
      throw new NotFoundException('가져올 게시물이 없습니다.');
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
      .take(50)
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
      .skip((page - 1) * 10)
      .take(10)
      .getMany();

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
      throw new NotFoundException('수정 할 게시물이 없습니다.');
    }
    editPost.code = form.code;
    editPost.title = form.title;
    editPost.content = form.content;
    editPost.region = form.region;
    editPost.lat = form.lat;
    editPost.lng = form.lng;
    editPost.country = <any>{ id: country.id };
    if (file) {
<<<<<<< HEAD
      editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
=======
      editPost.thumbnail = file.location;
>>>>>>> 8f71fa750c0f8c9c84697c5ea1142b96df06ac6a
    }
    await this.StoriesRepository.save(editPost);

    await this.NoticesRepository.save({
      header: `${country.name}/연대기`,
      code: editPost.code,
      userId,
      storyId: editPost.id,
      content: `${form.title.slice(0, 10)}...을 수정했습니다.`,
    });
    return { storyId: parseInt(form.storyId) };
  }

  async likePost(storyId: number, userId: number) {
    if (!storyId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    const newPostLike = new StoryLike();
    newPostLike.userId = userId;
    newPostLike.storyId = storyId;
    return await this.StoryLikeRepository.save(newPostLike);
  }

  async dislikePost(storyId: number, userId: number) {
    if (!storyId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('유저를 찾지 못했습니다.');
    }
    return await this.StoryLikeRepository.delete({ storyId, userId });
  }

  async deletePost(storyId: number) {
    if (!storyId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    return await this.StoriesRepository.delete({
      id: storyId,
    });
  }
}
