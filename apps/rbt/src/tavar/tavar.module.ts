import { Module } from '@nestjs/common';
import { TavarService } from './tavar.service';
import { TavarController } from './tavar.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.RMQ,
        name: 'prods',
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'product_que',
        },
      },
    ]),
  ],
  controllers: [TavarController],
  providers: [TavarService],
})
export class TavarModule {}
