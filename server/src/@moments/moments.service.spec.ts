import { Test, TestingModule } from '@nestjs/testing';
import { MomentsService } from './moments.service';

describe('ClubpostsService', () => {
  let service: MomentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MomentsService],
    }).compile();

    service = module.get<MomentsService>(MomentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
