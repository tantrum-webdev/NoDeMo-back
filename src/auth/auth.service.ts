import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: AuthDto) {
    //generate pw hash
    const hash = await argon.hash(dto.password);
    //save new user in db
    const user = await this.prisma.user.create({
      data: {
        username: dto.username,
        password: hash,
        email: dto.email,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    //return saved user
    return user;
  }

  signIn() {
    return { msg: 'Hi, signin worked' };
  }
}
