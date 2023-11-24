import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  // @typescript-eslint/eslint-disable-next-line
  create() {
    return 'This action adds a new bookmark';
  }

  findAll() {
    return `This action returns all bookmark`;
  }

  findOne() {
    return `This action returns a bookmark`;
  }

  // @typescript-eslint/eslint-disable-next-line
  update() {
    return `This action updates a bookmark`;
  }

  remove() {
    return `This action removes a bookmark`;
  }
}
