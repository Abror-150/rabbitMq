import { userCreate, userLogin } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject('users') private readonly user: ClientProxy) {}

  register(data: userCreate) {
    return this.user.send('createUser', data);
  }
  login(data: userLogin) {
    return this.user.send('createLogin', data);
  }
}
