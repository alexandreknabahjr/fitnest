import { Test, TestingModule } from '@nestjs/testing';
import { ProfileService } from './profile.service';
import { PrismaService } from '../prisma/prisma.service'
import { create } from 'domain';

const fakeProfiles = [{
  firstName: "Cliente",
	lastName: "1",
	age: 30,
	height: 175,
	weight: 86,
	customerId: "22911902-a8c5-4ead-b562-b0f8865e95c3"
}]

const prismaMock = {
  profile: {
    create: jest.fn().mockReturnValue(fakeProfiles[0]),
    findMany: jest.fn().mockReturnValue(fakeProfiles),
    delete: jest.fn()
  }

}

describe('ProfileService', () => {
  let service: ProfileService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileService,
        {
          provide: PrismaService, useValue: prismaMock
        }
      ],
    }).compile();

    service = module.get<ProfileService>(ProfileService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  describe('createProfile', () => {
    it('should create a new profile', async () => { 
      const response = await service.createProfile(fakeProfiles[0]);

      expect(response).toBe(fakeProfiles[0]);
      expect(prisma.profile.create).toHaveBeenCalledTimes(1);

    } )
  });

  describe('findAllProfiles', () => {
    it('should list all profiles', async () => {
      const response = await service.findAllProfiles();

      expect(response).toEqual(fakeProfiles);
      expect(prisma.profile.findMany).toHaveBeenCalledTimes(1);
    })
  })


});
