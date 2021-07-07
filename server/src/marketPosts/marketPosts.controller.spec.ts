import { Test, TestingModule } from '@nestjs/testing';
import { MarketPostsController } from './market-posts.controller';

describe('MarketPostsController', () => {
  let controller: MarketPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketPostsController],
    }).compile();

    controller = module.get<MarketPostsController>(MarketPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
