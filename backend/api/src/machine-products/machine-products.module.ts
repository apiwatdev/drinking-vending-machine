import { Module } from '@nestjs/common';
import { MachineProductsService } from './machine-products.service';
import { MachineProductsController } from './machine-products.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [MachineProductsController],
  providers: [MachineProductsService, UsersService],
})
export class MachineProductsModule {}
