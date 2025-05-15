import { NestFactory } from '@nestjs/core';
import { AuthorModule } from './author.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthorModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'user_que',
      },
    },
  );
  await app.listen();
}
bootstrap();
