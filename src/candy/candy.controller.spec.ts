import { Test, TestingModule } from '@nestjs/testing';
import { CandyController } from './candy.controller';
import { CandyService } from './candy.service';

describe('CandyController', () => {
  let controller: CandyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandyController],
      providers: [CandyService],
    }).compile();

    controller = module.get<CandyController>(CandyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
