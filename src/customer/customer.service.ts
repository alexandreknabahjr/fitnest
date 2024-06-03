// Useful imports
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

// Prisma Service
import { PrismaService } from '../prisma/prisma.service'

// Schemas
import { CustomerSchema } from './types';


@Injectable()
export class CustomerService {

  constructor(private readonly prisma: PrismaService){}

  // Basic CRUD operations:
  async createCustomer(body: any) {

    const {email, address} = CustomerSchema.parse(body);

    const customerRegistered = await this.findCustomerByEmail(email).catch(() => null);

    if(customerRegistered){
      throw new HttpException(`Customer already exist in our system...`, HttpStatus.CONFLICT);
    }

    await this.prisma.customer.create({
      data: {
        email: email,
        address: address
      }
    })
  
  }

  async findAllCustomers() {
    return await this.prisma.customer.findMany();
  }

  async findCustomerById(id: string) {
    return await this.prisma.customer.findUnique({
      where: {id}
    })
  }

  async updateCustomerInformation(id: string, body: any) {
    const {email, address} = CustomerSchema.parse(body);

    const customerFound = await this.findCustomerById(id);

    if(!customerFound){
      return new HttpException(`Customer with id ${id} was not found...`, HttpStatus.NOT_FOUND);
    }

    await this.prisma.customer.update({
      where: {id},
      data: {
        email: email,
        address: address
      }
    })

  }

  async removeCustomerById(id: string) {
    await this.prisma.customer.delete({
      where: {id}
    })
  }

  // Queries:
  async findCustomerByEmail(email: string){
    const customer = await this.prisma.customer.findFirst({
      where: {email: email}
    })

    if(!customer){
      return null;
    }

    return customer;
  }

  async findCustomerWithInfo(id: string){
    return await this.prisma.customer.findFirst({
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

        },

        workout : {
          select : {
            name: true,
            duration: true,
            date: true,
            workoutType: true
          }
        },

        meals: {
          select: {
            foods: true,
            calories: true,
            carbs: true,
            protein: true,
            fats: true,
            date: true
          }
        }

      }
      
    })
  }

}
