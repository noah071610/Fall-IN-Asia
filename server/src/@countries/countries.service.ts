import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from 'src/entities/Countries';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Countries)
    private CountriesRepository: Repository<Countries>,
  ) {}

  async getCountries() {
    const countries = await this.CountriesRepository.createQueryBuilder(
      'country',
    )
      .addSelect(['moment.id'])
      .leftJoin('country.moments', 'moment')
      .getMany();
    if (!countries) {
      throw new NotFoundException('예상치못한 에러가 발생했습니다.');
    }
    return countries;
  }

  async getPopularCountries() {
    const countriesWithPoint =
      await this.CountriesRepository.createQueryBuilder('country')
        .leftJoinAndSelect('country.moments', 'moments')
        .leftJoinAndSelect('country.stories', 'stories')
        .getMany()
        .then((res) => {
          return res
            .map((v) => {
              return {
                code: v.code,
                point: v.moments.length * 1 + v.stories.length * 10,
              };
            })
            .sort((a: any, b: any) => b.point - a.point)
            .splice(0, 10);
        });
    if (!countriesWithPoint) {
      throw new NotFoundException('예상치못한 에러가 발생했습니다.');
    }
    let countriesOrderByPopularity = [];
    for (const i of countriesWithPoint) {
      await this.CountriesRepository.findOne({
        where: { code: i.code },
        relations: ['moments'],
      }).then((res) => {
        countriesOrderByPopularity.push(res);
      });
    }
    return countriesOrderByPopularity;
  }

  async getCountry(code: string) {
    const country = await this.CountriesRepository.createQueryBuilder('country')
      .where('country.code = :code', { code })
      .leftJoin('country.moments', 'mp')
      .addSelect(['mp.id'])
      .getOne();
    if (!country) {
      throw new NotFoundException('예상치못한 에러가 발생했습니다.');
    }
    return country;
  }
}
