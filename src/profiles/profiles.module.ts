import { Module } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { Profile } from './profiles.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [ProfileService],
  controllers: [ProfilesController],
  imports: [
    SequelizeModule.forFeature([Profile]),
    ClientsModule.register([
      {
        name: 'PROFILES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://lwemmdve:lF_4cvfq_cfZ-lvWKJfPLuNG9c8VLCZW@toad.rmq.cloudamqp.com/lwemmdve',
          ],
          queue: 'main_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  exports: [ProfileService],
})
export class ProfilesModule {}
