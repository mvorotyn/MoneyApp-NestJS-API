import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CandyModule } from './candy/candy.module';
import { TableDataModule } from './table-data/table-data.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    CandyModule,
    TodoModule,
    TableDataModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
// @Module({
//   imports: [TodoModule, MongooseModule.forRoot('mongodb://localhost/nest')],

// })
export class AppModule {}
