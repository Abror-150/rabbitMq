import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TavarService } from './tavar.service';
import { createProduct, updateProduct } from '@app/shared';

@Controller()
export class TavarController {
  constructor(private readonly tavarService: TavarService) {}

  @MessagePattern('createTavar')
  create(@Payload() createTavarDto: createProduct) {
    return this.tavarService.create(createTavarDto);
  }

  @MessagePattern('findAllTavar')
  findAll() {
    return this.tavarService.findAll();
  }

  @MessagePattern('findOneTavar')
  findOne(@Payload() id: number) {
    return this.tavarService.findOne(id);
  }
  

  @MessagePattern('removeTavar')
  remove(@Payload() id: number) {
    return this.tavarService.remove(id);
  }
}
