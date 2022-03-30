import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CandyService } from './candy.service';
import { CreateCandyDto } from './dto/create-candy.dto';
import { UpdateCandyDto } from './dto/update-candy.dto';

@Controller('candy')
export class CandyController {
  constructor(private readonly candyService: CandyService) {}

  @Post()
  create(@Body() createCandyDto: CreateCandyDto) {
    return this.candyService.create(createCandyDto);
  }

  @Get()
  findAll() {
    return this.candyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandyDto: UpdateCandyDto) {
    return this.candyService.update(+id, updateCandyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candyService.remove(+id);
  }
}
