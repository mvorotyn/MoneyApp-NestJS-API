import { Injectable } from '@nestjs/common';
import { CreateCandyDto } from './dto/create-candy.dto';
import { UpdateCandyDto } from './dto/update-candy.dto';

@Injectable()
export class CandyService {
  create(createCandyDto: CreateCandyDto) {
    return 'This action adds a new candy';
  }

  findAll() {
    return `This action returns all candy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} candy`;
  }

  update(id: number, updateCandyDto: UpdateCandyDto) {
    return `This action updates a #${id} candy`;
  }

  remove(id: number) {
    return `This action removes a #${id} candy`;
  }
}
