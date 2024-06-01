import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { WorkoutSchema } from './types';

@Injectable()
export class WorkoutService {

  constructor(private readonly prisma: PrismaService){}

  async createWorkout(body: any) {
    const {name, duration, date, workoutType, clientId} = WorkoutSchema.parse(body);

    await this.prisma.workout.create({
      data: {
        name: name,
        duration: duration,
        date: date,
        workoutType: workoutType,
        client: {connect: {id: clientId}}
      }
    })
  }


  async findAllWorkouts() {
    return await this.prisma.workout.findMany({
      select: {
        name: true,
        duration: true,
        date: true,
        workoutType: true,
        client: {
          select: {
            profile : {
              select : {
                firstName: true,
                lastName: true,
                clientId: true
              }
            }
          }
        }
      }
    })
  }

  /*

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }

  */
}
