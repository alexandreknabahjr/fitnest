import { Test, TestingModule } from '@nestjs/testing';
import { ClientService } from './client.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientService],
    }).useMocker((token) => {
      if(token === PrismaService){
        return {}
      }
    }).compile();

    service = module.get<ClientService>(ClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
