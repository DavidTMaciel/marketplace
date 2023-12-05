import { Client } from './entities/client.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client as ClientModel } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('create-client')
  async create(@Body() createClientDto: CreateClientDto): Promise<ClientModel> {
    return this.clientService.create(createClientDto);
  }
  @UseGuards(AuthGuard)
  @Get('list-clients')
  async findAll(){
    return this.clientService.findAll();
  }

  @Get('list-client/:id')
  async findOne(@Param('id') id: string):Promise<ClientModel> {
    return this.clientService.findOne({
      id:Number(id),
    });
  }

  @Patch('update-client/:id')
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto):Promise<ClientModel> {
    return this.clientService.update({
      where:{id:Number(id)}, data:updateClientDto
    });
  }

  @Delete('delete-client/:id')
  async remove(@Param('id') id: string) {
    return this.clientService.remove({
      id:Number(id)
    });
  }
}
