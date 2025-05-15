import { userCreate, userLogin } from '@app/shared';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'apps/product/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}
  async register(data: userCreate) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { email: data.email },
      });
      if (user) {
        throw new BadRequestException('user already exists');
      }
      let hash = bcrypt.hashSync(data.password, 10);
      let newUser = await this.prisma.user.create({
        data: {
          userName: data.userName,
          email: data.email,
          password: hash,
          phone: data.phone,
        },
      });
      return newUser;
    } catch (error) {
      return error;
    }
  }

  async login(data: userLogin) {
    try {
      let user = await this.prisma.user.findFirst({
        where: { userName: data.userName },
      });
      if (!user) {
        return { message: 'user not found' };
      }
      let match = bcrypt.compareSync(data.password, user.password);
      if (!match) {
        return { message: 'incorrect password' };
      }

      let token = this.jwt.sign({ id: user.id });
      return { token };
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error.message);
    }
  }
}
