import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userCreate, userLogin } from '@app/shared';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUserDto: userCreate) {
    return this.userService.register(createUserDto);
  }

  @Post('login')
  login(@Body() data: userLogin) {
    return this.userService.login(data);
  }
}
