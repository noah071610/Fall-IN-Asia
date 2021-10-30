import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Images } from 'src/entities/Images';
import { Repository } from 'typeorm';
import { Countries } from 'src/entities/Countries';
import { ArticleCreateDto, ArticleEditDto } from 'src/@articles/articles.dto';
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
    form: ArticleCreateDto,
    userId: number,
    file: Express.MulterS3.File,
  ) {
    if (!form) {
      throw new NotFoundException('message.error.noDataToPost');
    }
    if (!userId) {
      throw new UnauthorizedException('message.error.notHost');
    }
    const user = await this.UsersRepository.findOne({
      select: ['id', 'admin'],
      where: { id: userId },
    });
    if (!user.admin) {
      throw new UnauthorizedException('message.error.notHost');
    }
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const newPost = new Articles();
    newPost.type = form.type;
    newPost.title = form.title;
    newPost.content = form.content;
    newPost.region = form.region;
    newPost.lat = form.lat;
    newPost.lng = form.lng;
    newPost.country = <any>{ id: country.id };
    newPost.user = <any>{ id: user.id };
    if (form.ranking) {
      newPost.ranking = parseInt(form.ranking);
    }
    if (form.label) {
      newPost.label = form.label;
    }
    if (file) {
      newPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
    }
    await this.ArticlesRepository.save(newPost);
    return { articleId: newPost.id };
  }

  async saveImage(file: Express.MulterS3.File) {
    if (!file) {
      throw new NotFoundException('message.error.noImage');
    }
    const newImage = new Images();
    newImage.image_src = file.location.replace(/\/original\//, '/thumb/');
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
      throw new NotFoundException('message.error.noPost');
    }
    return post;
  }

  async getPopularPosts(code?: string) {
    if (code) {
      const country = await this.CountriesRepository.findOne({
        where: { code },
      });
      const rankingPostsByCountry =
        await this.ArticlesRepository.createQueryBuilder('articles')
          .leftJoinAndSelect('articles.country', 'country')
          .orderBy('articles.ranking', 'DESC')
          .where(`articles.country = :country`, { country: country.id })
          .take(4)
          .getMany();
      return rankingPostsByCountry;
    } else {
      const rankingPosts = await this.ArticlesRepository.createQueryBuilder(
        'articles',
      )
        .leftJoinAndSelect('articles.country', 'country')
        .orderBy('articles.ranking', 'DESC')
        .take(6)
        .getMany();
      return rankingPosts;
    }
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
    form: ArticleEditDto,
    file: Express.MulterS3.File,
    userId: number,
  ) {
    if (!userId) {
      throw new UnauthorizedException('message.error.notHost');
    }
    const user = await this.UsersRepository.findOne({
      select: ['id', 'admin'],
      where: { id: userId },
    });
    if (!user.admin) {
      throw new UnauthorizedException('message.error.notHost');
    }
    const country = await this.CountriesRepository.findOne({
      where: { code: form.code },
    });
    const editPost = await this.ArticlesRepository.findOne({
      where: { id: form.articleId },
    });
    if (!editPost || !country) {
      throw new NotFoundException('message.error.noPostToEdit');
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
      editPost.thumbnail = file.location.replace(/\/original\//, '/thumb/');
    }
    await this.ArticlesRepository.save(editPost);
    return { articleId: parseInt(form.articleId) };
  }

  async deletePost(articleId: number, userId: number) {
    if (!articleId) {
      throw new NotFoundException('message.error.noPost');
    }
    if (!userId) {
      throw new UnauthorizedException('message.error.notHost');
    }
    const user = await this.UsersRepository.findOne({
      select: ['id', 'admin'],
      where: { id: userId },
    });
    if (!user.admin) {
      throw new UnauthorizedException('message.error.notHost');
    }
    return await this.ArticlesRepository.delete({
      id: articleId,
    });
  }
}
