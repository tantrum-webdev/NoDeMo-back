import { Controller, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Put('register')
  signUp() {
    //generate pw hash
    //save new user in db
    //return saved user
  }

  @Post('login')
  signIn() {
    return this.authService.signIn();
  }
}
