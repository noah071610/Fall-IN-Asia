import { Test, TestingModule } from '@nestjs/testing';
import { ClubpostsController } from './clubposts.controller';

describe('ClubpostsController', () => {
  let controller: ClubpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubpostsController],
    }).compile();

    controller = module.get<ClubpostsController>(ClubpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
