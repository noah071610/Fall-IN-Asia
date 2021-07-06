import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Groups } from 'src/entities/Groups';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Groups) private groupsRepository: Repository<Groups>,
  ) {}

  async getGroups() {
    const groups = await this.groupsRepository.find();
    if (!groups) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return groups;
  }

  async getSpecificGroupForClub(group: string) {
    const specificGroup = await this.groupsRepository.findOne({
      where: { key_name: group },
    });
    if (!specificGroup) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return specificGroup;
  }
}
