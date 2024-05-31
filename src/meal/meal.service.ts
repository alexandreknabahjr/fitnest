import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealService {

  constructor(private readonly prisma: PrismaService){}

  /*
  create(createMealDto: CreateMealDto) {
    return 'This action adds a new meal';
  }

  findAll() {
    return `This action returns all meal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meal`;
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
  */
}
