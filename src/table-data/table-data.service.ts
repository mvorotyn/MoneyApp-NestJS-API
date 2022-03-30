import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTableDataDto } from './dto/create-table-data.dto';
import { UpdateTableDataDto } from './dto/update-table-data.dto';

import { Model } from 'mongoose';
import { TableData, TableDataDocument } from './schemas/table-data.schema';

@Injectable()
export class TableDataService {
  constructor(
    @InjectModel(TableData.name)
    private readonly model: Model<TableDataDocument>,
  ) {}

  async update(
    id: string,
    updateTableDataDto: UpdateTableDataDto,
  ): Promise<TableData> {
    return await this.model
      .findByIdAndUpdate(id, { ...updateTableDataDto, updatedAt: new Date() })
      .exec();
  }

  async delete(id: string): Promise<TableData> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  async findAll(): Promise<TableData[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<TableData> {
    return await this.model.findById(id).exec();
  }

  async create(createTableDataDto: CreateTableDataDto): Promise<TableData> {
    console.log(createTableDataDto);
    if (await this.model.findOne({ title: createTableDataDto.title })) {
      return this.model.findOneAndReplace(
        { title: createTableDataDto.title },
        {
          ...createTableDataDto,
          createdAt: new Date(),
        },
      );
    } else {
      return await new this.model({
        ...createTableDataDto,
        createdAt: new Date(),
      }).save();
    }
  }
}
