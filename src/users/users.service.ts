import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly model: Model<UserDocument>,
  ) {}

  async findOne(username: string): Promise<Record<string, unknown>> {
    const userModelInstance = await this.model
      .findOne({ username: username })
      .exec();
    if (!userModelInstance) return undefined;
    return {
      username: userModelInstance.username,
      password: userModelInstance.password,
      id: userModelInstance.id,
    };
  }

  async addUser(
    createUserDto: CreateUserDto,
  ): Promise<Record<string, unknown>> {
    console.log(createUserDto);
    const userModelInstance = await new this.model(createUserDto).save();
    return {
      username: userModelInstance.username,
      password: userModelInstance.password,
      id: userModelInstance.id,
    };
  }
}

// import { Injectable } from '@nestjs/common';

// // This should be a real class/interface representing a user entity
// export type User = any;

// @Injectable()
// export class UsersService {
//   private users = [
//     {
//       userId: 1,
//       username: 'john',
//       password: 'changeme',
//     },
//     {
//       userId: 2,
//       username: 'maria',
//       password: 'guess',
//     },
//   ];

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find((user) => user.username === username);
//   }

//   addUser(user: any) {
//     this.users.push({ userId: this.users.length + 1, ...user });
//     console.log(this.users);
//   }
//
