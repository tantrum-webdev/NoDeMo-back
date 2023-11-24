import { Injectable } from '@nestjs/common'
import { CreateUserInfoDto } from './dto/create-user-info.dto'
import { UpdateUserInfoDto } from './dto/update-user-info.dto'

@Injectable()
export class UserInfoService {
  /*eslint-disable-next-line*/
  create(createUserInfoDto: CreateUserInfoDto) {
    return 'This action adds a new userInfo'
  }

  findAll() {
    return `This action returns all userInfo`
  }

  findOne(id: string) {
    return `This action returns a #${id} userInfo`
  }
  /*eslint-disable-next-line*/
  update(id: string, updateUserInfoDto: UpdateUserInfoDto) {
    return `This action updates a #${id} userInfo`
  }

  remove(id: string) {
    return `This action removes a #${id} userInfo`
  }
}
