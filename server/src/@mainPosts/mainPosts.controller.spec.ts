import { Test, TestingModule } from '@nestjs/testing';
import { MainPostsController } from './mainPosts.controller';

describe('MainPostsController', () => {
  let controller: MainPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainPostsController],
    }).compile();

    controller = module.get<MainPostsController>(MainPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
