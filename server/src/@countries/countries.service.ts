import axios from 'axios';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from 'src/entities/Countries';
import { Repository } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

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
      .addSelect(['moments.id', 'stories.id'])
      .leftJoin('country.moments', 'moments')
      .leftJoin('country.stories', 'stories')
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
      .addSelect(['moments.id', 'stories.id'])
      .leftJoin('country.moments', 'moments')
      .leftJoin('country.stories', 'stories')
      .getOne();
    if (!country) {
      throw new NotFoundException('예상치못한 에러가 발생했습니다.');
    }
    return country;
  }

  async getCountryInfo(code: string, type: string) {
    const country_info = await axios
      .get(
        `http://apis.data.go.kr/1262000/${type.replace('_', '/')}?serviceKey=${
          process.env.OPEN_DATA_API_KEY
        }&returnType=JSON&numOfRows=10&pageNo=1&cond[country_iso_alp2::EQ]=${code}`,
      )
      .then((res) => {
        if (
          type === 'CountryCovid19SafetyServiceNew_getCountrySafetyNewsListNew'
        ) {
          return {
            content: res.data.data[0].html_origin_cn,
          };
        }
        if (type === 'CountrySafetyService2_getCountrySafetyList2') {
          return {
            content: res.data.data[0].txt_origin_cn,
          };
        }
      })
      .catch((error) => {
        throw new InternalServerErrorException(
          '서버에 오류가 발생했습니다. 불편을 드려 죄송합니다.',
        );
      });
    return country_info;
  }
}
