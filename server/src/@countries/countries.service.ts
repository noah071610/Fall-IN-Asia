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
