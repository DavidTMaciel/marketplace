import { Injectable } from '@nestjs/common';
import { Client, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prismaService/prismaService';

@Injectable()
export class ClientService {

  constructor(private prisma: PrismaService) { }

  async client(
    clientWhereUniqueInput: Prisma.ClientWhereUniqueInput
  ): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: clientWhereUniqueInput,
    })
  }


  async create(data: Prisma.ClientCreateInput): Promise<Client> {
    return this.prisma.client.create({
      data,
    })
  }

  async findAll() {
    return this.prisma.client.findMany()

  }

  async findOne(where: Prisma.ClientWhereUniqueInput) {
    return this.prisma.client.findUnique({
      where,
    })
  }

  async findOneEmail(email: string): Promise<Client | undefined> {
    return this.prisma.client.findUnique({ where: { email }})
  }

  async update(params: {
    where: Prisma.ClientWhereUniqueInput,
    data: Prisma.ClientUpdateInput
  }) {
    const { where, data } = params;

    return this.prisma.client.update({
      data,
      where,
    });
  }

  remove(where: Prisma.ClientWhereUniqueInput) {
    return this.prisma.client.delete({
      where,
    })
  }
}
