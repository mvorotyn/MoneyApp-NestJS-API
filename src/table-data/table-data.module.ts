import { Module } from '@nestjs/common';
import { TableDataService } from './table-data.service';
import { TableDataController } from './table-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TableData, TableDataSchema } from './schemas/table-data.schema';

@Module({
  controllers: [TableDataController],
  providers: [TableDataService],
  imports: [
    MongooseModule.forFeature([
      { name: TableData.name, schema: TableDataSchema },
    ]),
  ],
})
export class TableDataModule {}
