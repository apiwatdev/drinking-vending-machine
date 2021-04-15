import { Test, TestingModule } from '@nestjs/testing';
import { MachineProductsController } from './machine-products.controller';
import { MachineProductsService } from './machine-products.service';

describe('MachineProductsController', () => {
  let controller: MachineProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineProductsController],
      providers: [MachineProductsService],
    }).compile();

    controller = module.get<MachineProductsController>(MachineProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
