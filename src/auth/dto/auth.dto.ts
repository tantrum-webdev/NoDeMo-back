import { applyDecorators } from '@nestjs/common';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

const AuthorizedString = () => {
  const whiteSpaceRegEx = /^\S*$/;
  return applyDecorators(Matches(whiteSpaceRegEx), IsNotEmpty(), IsString());
};
const minimumLength = 8;

export class AuthDto {
  @AuthorizedString()
  username: string;

  @AuthorizedString()
  @MinLength(minimumLength)
  password: string;

  @AuthorizedString()
  @IsEmail()
  email: string;
}
