// Useful imports
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

// Prisma Service
import { PrismaService } from 'src/prisma/prisma.service';

// Schemas
import { ClientSchema } from './types';


@Injectable()
export class ClientService {

  constructor(private readonly prisma: PrismaService){}

  // Basic CRUD operations:
  async createClient(body: any) {

    const {email, address,} = ClientSchema.parse(body);

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



  async updateClientInformation(id: string, body: any) {
    const {email, address} = ClientSchema.parse(body);

    const clientFound = await this.findClientById(id);

    if(!clientFound){
      return new HttpException(`Client with id ${id} was not found...`, HttpStatus.NOT_FOUND);
    }

    await this.prisma.client.update({
      where: {id},
      data: {
        email: email,
        address: address
      }
    })

  }

  async removeClientById(id: string) {
    await this.prisma.client.delete({
      where: {id}
    })
  }

  // Queries:
  async findClientWithProfile(id: string){
    return await this.prisma.client.findFirst({
      where: {id},
      relationLoadStrategy: 'join',
      select: {
        email: true,

        profile: {
          select: {
            firstName: true,
            lastName: true,
            age: true,
            height: true,
            weight: true
          }
        }
      }
      
    })
  }

}
