import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log('user id: ', user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(user: CreateUserDto) {
    const userName = user.username;
    // console.log(userName);
    const registeredUser = await this.usersService.findOne(userName);

    //user already exists in db
    if (registeredUser) {
      throw new UnauthorizedException();
    }

    const savedUser = await this.usersService.addUser(user);

    const payload = {
      username: savedUser.username,
      sub: savedUser.id,
    };

    console.log('payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(user: any) {
    console.log(typeof user, user);
    const payload = { username: user.username, sub: user.id };
    console.log('payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

// import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async validateUser(username: string, pass: string): Promise<any> {
//     const user = await this.usersService.findOne(username);
//     if (user && user.password === pass) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   async register(user: any) {
//     console.log(user);
//     const payload = { username: user.username, sub: user.userId };
//     this.usersService.addUser({ ...user });
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }

//   async login(user: any) {
//     const payload = { username: user.username, sub: user.userId };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
