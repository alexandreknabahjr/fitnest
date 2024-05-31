// Useful imports
import { Injectable } from '@nestjs/common';

// Prisma Service
import { PrismaService } from 'src/prisma/prisma.service';

// Schemas
import { CreateClientSchema } from './types';


@Injectable()
export class ClientService {

  constructor(private readonly prisma: PrismaService){}

  async createClient(body: any) {

    const {email, address} = CreateClientSchema.parse(body);

    await this.prisma.client.create({
      data: {
        email: email,
        address: address
      }
    })
  }

  async findAllClients() {
    return await this.prisma.client.findMany();
  }

  async findClientById(id: string) {
    return await this.prisma.client.findUnique({
      where: {id}
    })
  }

  /*

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} Client`;
  }

  */

  async removeClientById(id: string) {
    await this.prisma.client.delete({
      where: {id}
    })
  }


  async findClientWithProfile(id: string){
    return await this.prisma.client.findFirst({
      where: {id},
      relationLoadStrategy: 'join',
      include: {
        profile: true
      }
    })
  }

}
