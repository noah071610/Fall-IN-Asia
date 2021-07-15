import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Groups } from 'src/entities/Groups';
import { GroupVote } from 'src/entities/GroupVote';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Groups) private groupsRepository: Repository<Groups>,
    @InjectRepository(GroupVote)
    private groupVoteRepository: Repository<GroupVote>,
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

  async patchScore(style: string, groupId: number, userId: number) {
    const groupScore = await this.groupsRepository.findOne({
      where: { id: groupId },
      relations: ['votedUser'],
    });
    switch (style) {
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
    if (!groupScore) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    const newGroupVote = new GroupVote();
    newGroupVote.userId = userId;
    newGroupVote.groupId = groupId;
    newGroupVote.votedStyle = style as any;
    await this.groupsRepository.save(groupScore);
    await this.groupVoteRepository.save(newGroupVote);
    return groupScore;
  }

  async undoScore(style: string, groupId: number, userId: number) {
    const deleteGroupScore = await this.groupVoteRepository.delete({
      userId,
      groupId,
    });
    if (!deleteGroupScore) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    const groupScore = await this.groupsRepository.findOne({
      where: { id: groupId },
      relations: ['votedUser'],
    });
    switch (style) {
      case 'handsome':
        groupScore.handsome--;
        break;

      case 'pretty':
        groupScore.pretty--;
        break;

      case 'beautiful':
        groupScore.beautiful--;
        break;

      case 'talented':
        groupScore.talented--;
        break;
      case 'cute':
        groupScore.cute--;
        break;
      default:
        break;
    }
    await this.groupsRepository.save(groupScore);
    return groupScore;
  }

  async getGroupsWithScore() {
    const groupsWithScore = await this.groupsRepository.find({
      take: 5,
      relations: ['votedUser'],
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
    });
    if (!groupWithScore) {
      throw new NotFoundException('予想できないエラーが発生しました。');
    }
    return groupWithScore;
  }
}
