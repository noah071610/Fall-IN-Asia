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
      newPost.thumbnail = process.env.BACK_URL + file.path.replace('\\', '/');
    }
    await this.ArticlesRepository.save(newPost);
    return { articleId: newPost.id };
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
    file: Express.Multer.File,
    userId: number,
  ) {
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
    const editPost = await this.ArticlesRepository.findOne({
      where: { id: form.articleId },
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
    await this.ArticlesRepository.save(editPost);
    return { articleId: parseInt(form.articleId) };
  }

  async deletePost(articleId: number, userId: number) {
    if (!articleId) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
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
    return await this.ArticlesRepository.delete({
      id: articleId,
    });
  }
}
