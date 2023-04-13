import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://lwemmdve:lF_4cvfq_cfZ-lvWKJfPLuNG9c8VLCZW@toad.rmq.cloudamqp.com/lwemmdve',
      ],
      queue: 'cats_queue',
      queueOptions: {
        durable: false,
      },
    },
  }); /* app module - главный модуль, в нем другие модули */
  app.listen();
}
start();
