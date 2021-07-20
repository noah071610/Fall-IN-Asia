import { Test, TestingModule } from '@nestjs/testing';
import { MainPostsService } from './mainPosts.service';

describe('ClubpostsService', () => {
  let service: MainPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainPostsService],
    }).compile();

    service = module.get<MainPostsService>(MainPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
