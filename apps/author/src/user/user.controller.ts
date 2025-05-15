import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { userCreate } from '@app/shared';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('createUser')
  register(@Payload() data: userCreate) {
    return this.userService.register(data);
  }

  @MessagePattern('createLogin')
  login(@Payload() data: userCreate) {
    return this.userService.login(data);
  }
}
