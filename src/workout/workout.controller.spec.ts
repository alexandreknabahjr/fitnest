import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { PrismaService } from '../prisma/prisma.service';

describe('WorkoutController', () => {
  let controller: WorkoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutController],
      providers: [WorkoutService],
    }).useMocker((token) => {
      if(token === PrismaService){
        return {}
      }
    }).compile();

    controller = module.get<WorkoutController>(WorkoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
