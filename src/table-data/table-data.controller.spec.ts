import { Test, TestingModule } from '@nestjs/testing';
import { TableDataController } from './table-data.controller';
import { TableDataService } from './table-data.service';

describe('TableDataController', () => {
  let controller: TableDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableDataController],
      providers: [TableDataService],
    }).compile();

    controller = module.get<TableDataController>(TableDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
