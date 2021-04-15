import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MachineProductsService } from './machine-products.service';
import { CreateMachineProductDto } from './dto/create-machine-product.dto';
import { UpdateMachineProductDto } from './dto/update-machine-product.dto';

@Controller('machine-products')
export class MachineProductsController {
  constructor(
    private readonly machineProductsService: MachineProductsService,
  ) {}

  @Post()
  create(@Body() createMachineProductDto: CreateMachineProductDto) {
    return this.machineProductsService.create(createMachineProductDto);
  }

  @Get()
  findAll() {
    return this.machineProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineProductsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMachineProductDto: UpdateMachineProductDto,
  ) {
    return this.machineProductsService.update(+id, updateMachineProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineProductsService.remove(+id);
  }
}
