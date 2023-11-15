import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signUp(dto);
    //save new user in db
    //return saved user
  }

  @Post('login')
  signIn() {
    return this.authService.signIn();
  }
}
