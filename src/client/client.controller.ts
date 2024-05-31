import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly ClientService: ClientService) {}

  @Post()
  async create(@Body() body) {
    try {
      await this.ClientService.create(body);
      
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async findAll() {
   try {
     return this.ClientService.findAll();
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
