import { Module } from '@nestjs/common';
import { TavarModule } from './tavar/tavar.module';

@Module({
  imports: [TavarModule],
  controllers: [],
  providers: [],
})
export class ProductModule {}
