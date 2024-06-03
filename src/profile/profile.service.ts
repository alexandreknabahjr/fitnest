// Useful imports
import { Injectable } from '@nestjs/common';

// Prisma Service
import { PrismaService } from '../prisma/prisma.service'

// Schemas
import { ProfileSchema } from './types';

@Injectable()
export class ProfileService {

  constructor(private readonly prisma: PrismaService){}

  async createProfile(body: any) {
    const {firstName, lastName, age, height, weight, clientId} = ProfileSchema.parse(body);

    await this.prisma.profile.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        age: age,
        height: height,
        weight: weight,
        client: {connect: {id: clientId}}
      }
    })
  }

  async findAllProfiles() {
    return await this.prisma.profile.findMany();
  }
  
  /*

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  */
  async removeProfileById(id: string) {
    await this.prisma.profile.delete({
      where: {id}
    })
  }
}
