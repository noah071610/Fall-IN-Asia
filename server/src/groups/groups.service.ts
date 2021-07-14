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
    const groups = await this.groupsRepository.find({
      select: ['id', 'group_name', 'key_name', 'image'],
    });
    if (!groups) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return groups;
  }

  async patchScore(form: { style: string; groupId: number }) {
    const groupScore = await this.groupsRepository.findOne({
      where: { id: form.groupId },
    });
    switch (form.style) {
      case 'handsome':
        groupScore.handsome++;
        break;

      case 'pretty':
        groupScore.pretty++;
        break;

      case 'beautiful':
        groupScore.beautiful++;
        break;

      case 'talented':
        groupScore.talented++;
        break;
      case 'cute':
        groupScore.cute++;
        break;
      default:
        break;
    }
    await this.groupsRepository.save(groupScore);
    if (!groupScore) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return true;
  }

  async getGroupsWithScore() {
    const groupsWithScore = await this.groupsRepository.find({
      take: 5,
    });
    if (!groupsWithScore) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return groupsWithScore;
  }

  async getSpecificGroup(group: string) {
    const specificGroup = await this.groupsRepository.findOne({
      where: { key_name: group },
      select: ['id', 'group_name', 'key_name', 'image'],
    });
    if (!specificGroup) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return specificGroup;
  }

  async getGroupWithScore(group: string) {
    const groupWithScore = await this.groupsRepository.findOne({
      where: { key_name: group },
      select: ['id', 'group_name', 'key_name', 'image'],
      relations: ['groupScore'],
    });
    if (!groupWithScore) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return groupWithScore;
  }
}
