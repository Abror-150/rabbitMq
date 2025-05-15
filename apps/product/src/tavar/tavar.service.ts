import { createProduct, updateProduct } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/product/prisma/prisma.service';

@Injectable()
export class TavarService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: createProduct) {
    const created = await this.prisma.product.create({ data });
    return created;
  }

  async findAll() {
    let data = await this.prisma.product.findMany();
    return data;
  }

  async findOne(id: number) {
    let data = await this.prisma.product.findFirst({ where: { id } });
    return data;
  }

  async update(data: updateProduct, id: number) {
    let updated = await this.prisma.product.update({
      where: { id },
      data: data,
    });
    return updated;
  }

  async remove(id: number) {
    let deleted = await this.prisma.product.delete({ where: { id } });
    return deleted;
  }
}
