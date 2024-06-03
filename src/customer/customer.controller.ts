import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly CustomerService: CustomerService) {}

  // Basic CRUD operations:
  @Post()
  async createCustomers(@Body() body) {
    try {
      await this.CustomerService.createCustomer(body);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAllCustomers() {
   try {
     return await this.CustomerService.findAllCustomers();
   } catch (error) {
    console.log(error);
   }
  }

  @Get(':id')
  async findCustomerById(@Param('id') id: string) {
    try {
      return await this.CustomerService.findCustomerById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch(':id')
  async updateCustomerInformation(@Param('id') id: string, @Body() body) {
    try {
      return await this.CustomerService.updateCustomerInformation(id, body);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async removeCustomerById(@Param('id') id: string) {
    try {
      await this.CustomerService.removeCustomerById(id);
    } catch (error) {
      console.log(error);
    }
  }

  // Queries:
  @Get(':email')
  async findCustomerByEmail(@Query('email') email: string){
    try {
      return this.CustomerService.findCustomerByEmail(email);
    } catch (error) {
      console.log(error)
    }

  }

  @Get('/:id/profile')
  async findCustomerWithInfo(@Query('id') id: string){
    try {
      return await this.CustomerService.findCustomerWithInfo(id);
    } catch (error) {
      console.log(error);
    }
  }

}
