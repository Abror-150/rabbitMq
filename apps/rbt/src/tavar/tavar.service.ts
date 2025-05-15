import { createProduct } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TavarService {
  constructor(@Inject('prods') private readonly prods: ClientProxy) {}
  create(data: createProduct) {
    return this.prods.send('createTavar', data);
  }

  findAll() {
    return this.prods.send('findAllTavar', {});
  }

  findOne(id: number) {
    return this.prods.send('findOneTavar', id);
  }

  remove(id: number) {
    return this.prods.send('removeTavar', id);
  }
}
