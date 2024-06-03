import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutService } from './workout.service';
import { PrismaService } from '../prisma/prisma.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutService],
    }).useMocker((token) => {
      if(token === PrismaService){
        return {
          workout: {
            create: jest.fn().mockResolvedValue({
              name: "Crossfit Session I",
              duration: 60,
              date: "2023-06-03T09:00:00Z",
              workoutType: "CROSSFIT",
              customerId: "22911902-a8c5-4ead-b562-b0f8865e95c3"
            })
          }
        }
      }
    }).compile();

    service = module.get<WorkoutService>(WorkoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createWorkout', () => {
    it('should create a workout', async () => {
      const newWorkout = {
          name: "Crossfit Session I",
          duration: 60,
          date: "2023-06-03T09:00:00Z",
          workoutType: "CROSSFIT",
          customerId: "22911902-a8c5-4ead-b562-b0f8865e95c3"
      }

      const workoutResult = await service.createWorkout(newWorkout);

      expect(workoutResult).toEqual({
        name: "Crossfit Session I",
        duration: 60,
        date: "2023-06-03T09:00:00Z",
        workoutType: "CROSSFIT",
        customerId: "22911902-a8c5-4ead-b562-b0f8865e95c3"
      });

    })
  })

  
});
