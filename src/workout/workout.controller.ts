import { Controller, Get, Post, Body, Param, Delete, HttpException } from '@nestjs/common';
import { WorkoutService } from './workout.service';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  async createWorkout(@Body() body) {
    try {
      await this.workoutService.createWorkout(body);
    } catch (error) {
      if(error instanceof HttpException){
        throw error;
      }
    }
  }

  @Get()
  async findAllfindAllWorkouts() {
    try {
      return await this.workoutService.findAllWorkouts();
    } catch (error) {
      console.log(error);
    }
  }

  @Delete(':id')
  async removeWorkout(@Param('id') id: string) {
    try {
      await this.workoutService.removeWorkout(id);
    } catch (error) {
      console.log(error)
    }
  }
}
