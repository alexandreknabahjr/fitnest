import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutService } from './workout.service';
import { PrismaService } from '../prisma/prisma.service';

const fakeWorkout = [{
  name: "Crossfit Session I",
  duration: 60,
  date: "2023-06-03T09:00:00Z",
  workoutType: "CROSSFIT",
  customerId: "22911902-a8c5-4ead-b562-b0f8865e95c3"
}]

const prismaMock = {
  workout: {
    create: jest.fn().mockReturnValue(fakeWorkout[0]),
    findMany: jest.fn().mockReturnValue(fakeWorkout),
    delete: jest.fn()
  }
}

describe('WorkoutService', () => {
  let service: WorkoutService;
  let prisma: PrismaService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutService,
        {
          provide: PrismaService,
          useValue: prismaMock
        }
      ]
    }).compile();

    service = module.get<WorkoutService>(WorkoutService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createWorkout', () => {

    it('should create a new workout', async () => {

      const response = await service.createWorkout(fakeWorkout[0]);

      expect(response).toBe(fakeWorkout[0]);
      expect(prisma.workout.create).toHaveBeenCalledTimes(1);
    })
  });

  describe('findAllWorkouts', () => {
    it('should return all workouts', async () => {

      const response = await service.findAllWorkouts();

      expect(response).toBe(fakeWorkout);
      expect(prisma.workout.findMany).toHaveBeenCalledTimes(1);
    })
  })

  
});
