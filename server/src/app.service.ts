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

  welcomeTravelover(): string {
    return 'Hello Travelover! 코로나 끝나면 우리 모두 여행가자~!';
  }
  async getSearchPosts(searchWord: string) {
    const moments = await this.MomentsRepository.createQueryBuilder('moments')
      .leftJoinAndSelect('moments.country', 'country')
      .leftJoinAndSelect('moments.user', 'user')
      .where(`MATCH(content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .getMany();

    const stories = await this.StoriesRepository.createQueryBuilder('stories')
      .leftJoinAndSelect('stories.country', 'country')
      .leftJoinAndSelect('stories.user', 'user')
      .where(`MATCH(content) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .orWhere(`MATCH(region) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .orWhere(`MATCH(title) AGAINST ('${searchWord}' IN BOOLEAN MODE)`)
      .getMany();

    return { searchWord, moments, stories };
  }
}
