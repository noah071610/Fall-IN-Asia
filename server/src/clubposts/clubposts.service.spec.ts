import { Test, TestingModule } from '@nestjs/testing';
import { ClubpostsService } from './clubposts.service';

describe('ClubpostsService', () => {
  let service: ClubpostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubpostsService],
    }).compile();

    service = module.get<ClubpostsService>(ClubpostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
