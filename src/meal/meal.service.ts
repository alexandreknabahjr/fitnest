import { Body, Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service'
import { MealSchema } from './types';

@Injectable()
export class MealService {

  constructor(private readonly prisma: PrismaService){}

  async createMeal(body: any) {

    const {foods, calories, carbs, protein, fats, date, customerId} = MealSchema.parse(body);

    return await this.prisma.meal.create({
      data: {
        foods: foods,
        calories: calories,
        carbs: carbs,
        protein: protein,
        fats: fats,
        date: date,
        customer: {connect: {id: customerId}}
      }
    })
  }

  async findAllMeals() {
    return await this.prisma.meal.findMany({
      select: {
        foods: true,
        calories: true,
        carbs: true,
        protein: true,
        fats: true,
        date: true,
        customer : {
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
