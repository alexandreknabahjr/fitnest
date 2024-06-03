import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post()
  async create(@Body() body) {
    try {
      return await this.mealService.createMeal(body);
    } catch (error) {
      if(error instanceof HttpException){
        return error;
      }
    }
  }
  
  @Get()
  async findAllMeals() {
    try {
      return await this.mealService.findAllMeals();
    } catch (error) {
      console.log(error);
    }
  }
  
}
