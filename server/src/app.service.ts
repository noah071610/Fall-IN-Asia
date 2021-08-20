import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Moments } from './entities/Moments';
import { Stories } from './entities/Stories';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Moments)
    private MomentsRepository: Repository<Moments>,
    @InjectRepository(Stories)
    private StoriesRepository: Repository<Stories>,
  ) {}

  welcomeFallInAsia(): string {
    return 'Hello Fall IN Asia! 코로나 끝나면 우리 모두 여행가자~!';
  }
  async getSearchPosts(searchWord: string) {
    const moments = await this.MomentsRepository.createQueryBuilder('moments')
      .leftJoinAndSelect('moments.country', 'country')
      .leftJoinAndSelect('moments.user', 'user')
      .where(`MATCH(content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .getMany();

    const stories = await this.StoriesRepository.createQueryBuilder('stories')
      .select(['stories.title', 'stories.thumbnail', 'stories.id'])
      .leftJoinAndSelect('stories.country', 'country')
      .leftJoinAndSelect('stories.comments', 'comments')
      .leftJoinAndSelect('stories.likedUser', 'likedUser')
      .leftJoinAndSelect('stories.user', 'user')
      //BOOLEAN MODE 를 사용하고 전문검색으로 MATCH된 값을 사용합니다.
      .where(`MATCH(stories.content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .orWhere(
        `MATCH(stories.region) AGAINST ('${searchWord}' IN BOOLEAN MODE)`,
      )
      .orWhere(`MATCH(stories.title) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .getMany();

    return { searchWord, moments, stories };
  }
}
