import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { Repository } from 'typeorm';
import { Countries } from 'src/entities/Countries';
import { ArticleRequestDto } from 'src/dto/article.request.dto';
import { Articles } from 'src/entities/Articles';
import { Users } from 'src/entities/Users';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private ArticlesRepository: Repository<Articles>,
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>,
    @InjectRepository(Images)
    private ImagesRepository: Repository<Images>,
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
  ) {}

  async createPost(
    form: ArticleRequestDto,
    userId: number,
    file: Express.Multer.File,
  ) {
    if (!form) {
      throw new NotFoundException('작성 할 데이터가 없습니다.');
    }
    if (!userId) {
      throw new UnauthorizedException('운영자만 작성 할 수 있습니다.');
    }
    const user = await this.UsersRepository.findOne({
      select: ['id', 'admin'],
      where: { id: userId },
    });
    if (!user.admin) {
      throw new UnauthorizedException('운영자만 작성 할 수 있습니다.');
    }
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const newPostCreate = new Articles();
    newPostCreate.type = form.type;
    newPostCreate.title = form.title;
    newPostCreate.content = form.content;
    newPostCreate.region = form.region;
    newPostCreate.lat = form.lat;
    newPostCreate.lng = form.lng;
    newPostCreate.country = <any>{ id: country.id };
    newPostCreate.user = <any>{ id: user.id };
    if (form.ranking) {
      newPostCreate.ranking = parseInt(form.ranking);
    }
    if (form.label) {
      newPostCreate.label = form.label;
    }
    if (file) {
      newPostCreate.thumbnail =
        process.env.BACK_URL + file.path.replace('\\', '/');
    }
    return await this.ArticlesRepository.save(newPostCreate);
  }

  async saveImage(file: Express.Multer.File) {
    if (!file) {
      throw new NotFoundException('사용 할 이미지가 없습니다.');
    }
    const newImage = new Images();
    newImage.image_src = process.env.BACK_URL + file.path.replace('\\', '/');
    await this.ImagesRepository.save(newImage);
    return newImage.image_src;
  }

  async getOnePost(articleId: number) {
    const post = await this.ArticlesRepository.findOne({
      where: {
        id: articleId,
      },
      relations: ['country', 'images', 'user'],
    });
    if (!post) {
      throw new NotFoundException('가져올 게시물이 없습니다.');
    }
    return post;
  }

  async getAsidePosts() {
    const latestPosts = await this.ArticlesRepository.find({
      relations: ['country'],
      order: { id: 'DESC' },
      take: 4,
    });
    const rankingPosts = await this.ArticlesRepository.createQueryBuilder(
      'articles',
    )
      .leftJoinAndSelect('articles.country', 'country')
      .orderBy('articles.ranking', 'DESC')
      .take(4)
      .getMany();
    return { latestPosts, rankingPosts };
  }

  async getPosts(type?: string, page?: number) {
    const posts = await this.ArticlesRepository.createQueryBuilder('articles')
      .leftJoinAndSelect('articles.country', 'country')
      .where(type ? `articles.type = :type` : '1=1', { type })
      .orderBy('articles.id', 'DESC')
      .skip((page - 1) * 10)
      .take(10)
      .getMany();
    return posts;
  }

  async editPost(
    form: ArticleRequestDto,
    file: Express.Multer.File,
    isAdmin: boolean,
  ) {
    if (!isAdmin) {
      throw new UnauthorizedException('운영자만 수정 할 수 있습니다.');
    }
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const editPost = await this.ArticlesRepository.findOne({
      where: { id: form.id },
    });
    if (!editPost || !country) {
      throw new NotFoundException('수정 할 게시물이 없습니다.');
    }
    editPost.type = form.type;
    editPost.title = form.title;
    editPost.content = form.content;
    editPost.region = form.region;
    if (form.ranking) {
      editPost.ranking = parseInt(form.ranking);
    }
    if (form.label) {
      editPost.label = form.label;
    }
    editPost.lat = form.lat;
    editPost.lng = form.lng;
    editPost.country = <any>{ id: country.id };
    if (file) {
      editPost.thumbnail = process.env.BACK_URL + file.path.replace('\\', '/');
    }
    return await this.ArticlesRepository.save(editPost);
  }

  async deletePost(articleId: number) {
    if (!articleId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }
    return await this.ArticlesRepository.delete({
      id: articleId,
    });
  }
}
