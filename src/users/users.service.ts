import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOne() {
    console.log('this worked');
  }
}
