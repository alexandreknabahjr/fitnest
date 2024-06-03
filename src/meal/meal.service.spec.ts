import { Test, TestingModule } from '@nestjs/testing';
import { MealService } from './meal.service';
import { PrismaService } from '../prisma/prisma.service'

describe('MealService', () => {
  let service: MealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealService],
    }).useMocker((token) => {
      if(token === PrismaService){
        return {}
      }
    }).compile();

    service = module.get<MealService>(MealService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
