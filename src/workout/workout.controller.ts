import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
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

  /*

  /*

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.workoutService.update(+id, updateWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutService.remove(+id);
  }
  */
}
