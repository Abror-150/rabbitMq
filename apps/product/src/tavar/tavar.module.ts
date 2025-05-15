import { Module } from '@nestjs/common';
import { TavarService } from './tavar.service';
import { TavarController } from './tavar.controller';
import { PrismaModule } from 'apps/product/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TavarController],
  providers: [TavarService],
})
export class TavarModule {}
