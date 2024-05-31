// Useful imports
import { Injectable } from '@nestjs/common';

// Prisma Service
import { PrismaService } from 'src/prisma/prisma.service';

// Schemas
import { CreateClientSchema } from './types';


@Injectable()
export class ClientService {

  constructor(private readonly prisma: PrismaService){}

  async create(body: any) {

    const {email, address} = CreateClientSchema.parse(body);

    await this.prisma.client.create({
      data: {
        email: email,
        address: address
      }
    })
  }

  async findAll() {
    return await this.prisma.client.findMany();
  }

  /*

  findOne(id: number) {
    return `This action returns a #${id} Client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} Client`;
  }

  remove(id: number) {
    return `This action removes a #${id} Client`;
  }
  */
}
