import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  // Basic CRUD operations:
  @Post()
  async createClients(@Body() body) {
    try {
      await this.ClientService.createClient(body);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAllClients() {
   try {
     return await this.ClientService.findAllClients();
   } catch (error) {
    console.log(error);
   }
  }

  @Get(':id')
  async findClientById(@Param('id') id: string) {
    try {
      return await this.ClientService.findClientById(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Patch(':id')
  async updateClientInformation(@Param('id') id: string, @Body() body) {
    try {
      return await this.ClientService.updateClientInformation(id, body);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async removeClientById(@Param('id') id: string) {
    try {
      await this.ClientService.removeClientById(id);
    } catch (error) {
      console.log(error);
    }
  }

  // Queries:
  @Get(':email')
  async findClientByEmail(@Query('email') email: string){
    try {
      return this.ClientService.findClientByEmail(email);
    } catch (error) {
      console.log(error)
    }

  }

  @Get('/:id/profile')
  async findClientWithInfo(@Query('id') id: string){
    try {
      return await this.ClientService.findClientWithInfo(id);
    } catch (error) {
      console.log(error);
    }
  }

}
