import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TavarService } from './tavar.service';
import { createProduct } from '@app/shared';

@Controller('tavar')
export class TavarController {
  constructor(private readonly tavarService: TavarService) {}

  @Post()
  create(@Body() createTavarDto: createProduct) {
    return this.tavarService.create(createTavarDto);
  }

  @Get()
  findAll() {
    return this.tavarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tavarService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tavarService.remove(+id);
  }
}
