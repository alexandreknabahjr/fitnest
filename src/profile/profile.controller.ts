import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() body) {
    try {
      await this.profileService.createProfile(body);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  async findAllProfiles() {
    try {
      return await this.profileService.findAllProfiles();
    } catch (error) {
      console.log(error);
    }
  }

  /*

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }

  */
  @Delete(':id')
  async removeProfileById(@Param('id') id: string) {
    try {
      await this.profileService.removeProfileById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
