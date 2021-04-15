import { Module } from '@nestjs/common';
import { MachineProductsService } from './machine-products.service';
import { MachineProductsController } from './machine-products.controller';

@Module({
  controllers: [MachineProductsController],
  providers: [MachineProductsService],
})
export class MachineProductsModule {}
