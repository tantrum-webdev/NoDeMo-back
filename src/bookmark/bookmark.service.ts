import { Injectable } from '@nestjs/common';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Injectable()
export class BookmarkService {
  /*eslint-disable-next-line*/
  create(createBookmarkDto: CreateBookmarkDto) {
    return 'This action adds a new bookmark';
  }

  findAll() {
    return `This action returns all bookmark`;
  }

  findOne(id: string) {
    return `This action returns a #${id} bookmark`;
  }
  /*eslint-disable-next-line*/
  update(id: string, updateBookmarkDto: UpdateBookmarkDto) {
    return `This action updates a #${id} bookmark`;
  }

  remove(id: string) {
    return `This action removes a #${id} bookmark`;
  }
}
