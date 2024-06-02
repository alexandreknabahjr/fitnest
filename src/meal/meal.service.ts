import { Body, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { MealSchema } from './types';

@Injectable()
export class MealService {

  constructor(private readonly prisma: PrismaService){}

  async createMeal(body: any) {

    const {foods, calories, carbs, protein, fats, date, clientId} = MealSchema.parse(body);

    await this.prisma.meal.create({
      data: {
        foods: foods,
        calories: calories,
        carbs: carbs,
        protein: protein,
        fats: fats,
        date: date,
        client: {connect: {id: clientId}}
      }
    })
  }

  findAllMeals() {
    return this.prisma.meal.findMany({
      select: {
        foods: true,
        calories: true,
        carbs: true,
        protein: true,
        fats: true,
        date: true,
        client : {
          select: {
            profile: {
              select: {
                firstName: true,
                lastName: true,
                id: true
              }
            }
          }
        }
      }
    })
  }
}
