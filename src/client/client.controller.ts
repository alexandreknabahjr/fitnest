import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
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
      console.log(error);
    }
  }

  @Get()
  async findAllClients() {
   try {
     return this.ClientService.findAllClients();
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
  updateClientInformation(@Param('id') id: string, @Body() body) {
    try {
      return this.ClientService.updateClientInformation(id, body);
    } catch (error) {
      console.log(error);
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
  @Get('/:id/profile')
  async findClientWithProfile(@Query('id') id: string){
    try {
      return this.ClientService.findClientWithProfile(id);
    } catch (error) {
      console.log(error);
    }
  }

}
