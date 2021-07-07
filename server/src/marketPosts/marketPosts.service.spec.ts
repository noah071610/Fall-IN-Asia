import { Test, TestingModule } from '@nestjs/testing';
import { MarketPostsService } from './marketPosts.service';

describe('MarketPostsService', () => {
  let service: MarketPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketPostsService],
    }).compile();

    service = module.get<MarketPostsService>(MarketPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
