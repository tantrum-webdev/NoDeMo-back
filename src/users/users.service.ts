import { Injectable } from '@nestjs/common';

//This is where the model will come ine once prisma is here
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 'da55e17f-b1aa-43fb-8ca5-6ea01d340fc9',
      username: 'test1',
      password: '1234',
    },
    {
      userId: 'bf3e74e6-d9f9-486e-9ca3-247b4fc28409',
      username: 'test2',
      password: '1234',
    },
  ];

  async findOne() {
    console.log('this worked');
  }
}
