import { Test, TestingModule } from '@nestjs/testing';
import { TableDataService } from './table-data.service';

describe('TableDataService', () => {
  let service: TableDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableDataService],
    }).compile();

    service = module.get<TableDataService>(TableDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
