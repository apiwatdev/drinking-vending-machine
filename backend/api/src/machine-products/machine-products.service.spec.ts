import { Test, TestingModule } from '@nestjs/testing';
import { MachineProductsService } from './machine-products.service';

describe('MachineProductsService', () => {
  let service: MachineProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachineProductsService],
    }).compile();

    service = module.get<MachineProductsService>(MachineProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
