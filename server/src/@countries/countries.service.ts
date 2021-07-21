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
      .leftJoinAndSelect('country.mainPosts', 'mainPost')
      .getMany();
    if (!countries) {
      throw new NotFoundException('예상치못한 에러가 발생했습니다.');
    }
    return countries;
  }

  async getCountry(code: string) {
    const country = await this.CountriesRepository.createQueryBuilder('country')
      .where('country.code = :code', { code })
      .leftJoinAndSelect('country.mainPosts', 'mp')
      .addSelect(['mp.id'])
      .getOne();
    if (!country) {
      throw new NotFoundException('예상치못한 에러가 발생했습니다.');
    }
    return country;
  }
}
//   async patchScore(style: string, groupId: number, userId: number) {
//     const Countriescore = await this.CountriesRepository.findOne({
//       where: { id: groupId },
//       relations: ['votedUser'],
//     });
//     switch (style) {
//       case 'handsome':
//         Countriescore.handsome++;
//         break;

//       case 'pretty':
//         Countriescore.pretty++;
//         break;

//       case 'beautiful':
//         Countriescore.beautiful++;
//         break;

//       case 'talented':
//         Countriescore.talented++;
//         break;
//       case 'cute':
//         Countriescore.cute++;
//         break;
//       default:
//         break;
//     }
//     if (!Countriescore) {
//       throw new NotFoundException('予想できないエラーが発生しました。');
//     }
//     const newGroupVote = new GroupVote();
//     newGroupVote.userId = userId;
//     newGroupVote.groupId = groupId;
//     newGroupVote.votedStyle = style as any;
//     await this.CountriesRepository.save(Countriescore);
//     return Countriescore;
//   }

//   async undoScore(style: string, groupId: number, userId: number) {
//     const Countriescore = await this.CountriesRepository.findOne({
//       where: { id: groupId },
//       relations: ['votedUser'],
//     });
//     switch (style) {
//       case 'handsome':
//         Countriescore.handsome--;
//         break;

//       case 'pretty':
//         Countriescore.pretty--;
//         break;

//       case 'beautiful':
//         Countriescore.beautiful--;
//         break;

//       case 'talented':
//         Countriescore.talented--;
//         break;
//       case 'cute':
//         Countriescore.cute--;
//         break;
//       default:
//         break;
//     }
//     await this.CountriesRepository.save(Countriescore);
//     return Countriescore;
//   }

//   async getCountriesWithScore() {
//     const CountriesWithScore = await this.CountriesRepository.find({
//       take: 5,
//       relations: ['votedUser'],
//     });
//     if (!CountriesWithScore) {
//       throw new NotFoundException('予想できないエラーが発生しました。');
//     }
//     return CountriesWithScore;
//   }

//   async getGroupWithScore(group: string) {
//     const groupWithScore = await this.CountriesRepository.findOne({
//       where: { key_name: group },
//       select: ['id', 'group_name', 'key_name', 'image'],
//     });
//     if (!groupWithScore) {
//       throw new NotFoundException('予想できないエラーが発生しました。');
//     }
//     return groupWithScore;
//   }
// }
