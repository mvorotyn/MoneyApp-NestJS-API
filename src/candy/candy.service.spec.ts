import { Test, TestingModule } from '@nestjs/testing';
import { CandyService } from './candy.service';

describe('CandyService', () => {
  let service: CandyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandyService],
    }).compile();

    service = module.get<CandyService>(CandyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
