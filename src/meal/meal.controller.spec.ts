import { Test, TestingModule } from '@nestjs/testing';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import { PrismaService } from '../prisma/prisma.service';

describe('MealController', () => {
  let controller: MealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealController],
      providers: [MealService],
    }).useMocker((token) => {
      if(token === PrismaService){
        return {}
      }
    }).compile();

    controller = module.get<MealController>(MealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
