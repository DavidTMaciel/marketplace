import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/prismaService/prismaService';

@Module({
  controllers: [ClientController],
  providers: [ClientService,PrismaService],
  exports:[ClientService]
})
export class ClientModule {}
