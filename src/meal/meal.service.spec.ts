import { Test, TestingModule } from '@nestjs/testing';
import { MealService } from './meal.service';
import { PrismaService } from '../prisma/prisma.service'

const fakeMeals = [
  {
    "foods": ["Apple", "Banana", "Chicken Breast", "Rice"],
    "calories": 500,
    "carbs": 20,
    "protein": 80,
    "fats": 10,
    "date": "2023-06-03T12:00:00Z",
    "customerId": "22911902-a8c5-4ead-b562-b0f8865e95c3"
  }
]

const fakeMealsFindMany = [
	{
		"foods": [
			"Apple",
			"Banana",
			"Chicken Breast",
			"Rice"
		],
		"calories": 500,
		"carbs": 20,
		"protein": 80,
		"fats": 10,
		"date": "2023-06-03T12:00:00.000Z",
		"customer": {
			"profile": {
				"firstName": "Cliente",
				"lastName": "1",
				"id": "ab956eeb-ed86-4c01-8786-fb78bffe7156"
			}
		}
	}
]

const prismaMock = {
  meal: {
    create: jest.fn().mockReturnValue(fakeMeals[0]),
    findMany: jest.fn().mockReturnValue(fakeMealsFindMany),
  }
}

describe('MealService', () => {
  let service: MealService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealService,
        {
          provide: PrismaService, useValue: prismaMock
        }
      ],
    }).compile();

    service = module.get<MealService>(MealService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('createMeal', () => {
    it('should create a meal', async () => {
      const response = await service.createMeal(fakeMeals[0]);

      expect(response).toBe(fakeMeals[0]);
      expect(prisma.meal.create).toHaveBeenCalledTimes(1);
    })
  });

  describe('findAllMeals', () => {
    it('should list all meals (must include the customers profile info)', async () => {
      const response = await service.findAllMeals();

      expect(response).toEqual(fakeMealsFindMany);
      expect(prisma.meal.findMany).toHaveBeenCalledTimes(1);
    })
  })
});
