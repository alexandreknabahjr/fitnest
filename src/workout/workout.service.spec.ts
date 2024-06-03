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
        return {}
      }
    }).compile();

    service = module.get<WorkoutService>(WorkoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
});
