import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

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

  /*

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.ClientService.update(+id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ClientService.remove(+id);
  }
  */
}
