import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';

@Injectable()
export class UserInfoService {
  /*@typescript-eslint/eslint-disable-next-line*/
  create() {
    return 'This action adds a new userInfo';
  }

  findAll() {
    return `This action returns all userInfo`;
  }

  findOne() {
    return `This action returns a userInfo`;
  }
  /*@typescript-eslint/eslint-disable-next-line*/
  update() {
    return `This action updates a userInfo`;
  }

  remove() {
    return `This action removes a userInfo`;
  }
}
