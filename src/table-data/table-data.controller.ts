import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TableDataService } from './table-data.service';
import { CreateTableDataDto } from './dto/create-table-data.dto';
import { UpdateTableDataDto } from './dto/update-table-data.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('table-data')
export class TableDataController {
  constructor(private readonly tableDataService: TableDataService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTableDatumDto: CreateTableDataDto) {
    return this.tableDataService.create(createTableDatumDto);
  }

  @Get()
  findAll() {
    return this.tableDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableDataService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTableDatumDto: UpdateTableDataDto,
  ) {
    return this.tableDataService.update(id, updateTableDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableDataService.delete(id);
  }
}
