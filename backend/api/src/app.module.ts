import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { MachineProductsController } from './machine-products/machine-products.controller';
import { MachinesController } from './machines/machines.controller';
import { MachinesService } from './machines/machines.service';
import { UsersService } from './users/users.service';
import { MachineProductsModule } from './machine-products/machine-products.module';
import { MachinesModule } from './machines/machines.module';
import { UsersModule } from './users/users.module';
import { MachineProductsService } from './machine-products/machine-products.service';
import { FilesController } from './files/files.controller';

@Module({
  imports: [MachineProductsModule, UsersModule, MachinesModule],
  controllers: [
    AppController,
    UsersController,
    MachineProductsController,
    MachinesController,
    FilesController,
  ],
  providers: [
    AppService,
    MachinesService,
    UsersService,
    MachineProductsService,
  ],
})
export class AppModule {}
