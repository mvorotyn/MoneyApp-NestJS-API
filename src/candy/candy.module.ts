import { Module } from '@nestjs/common';
import { CandyService } from './candy.service';
import { CandyController } from './candy.controller';

@Module({
  controllers: [CandyController],
  providers: [CandyService]
})
export class CandyModule {}
