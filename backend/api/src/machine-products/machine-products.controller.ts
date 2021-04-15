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

  @Get(':machineId')
  findAllProductByMachineId(@Param('machineId') machineId) {
    return this.machineProductsService.findAllProductByMachineId(machineId);
  }

  @Post(':machineId')
  addProduct(@Param('machineId') machineId, @Body() body) {
    return this.machineProductsService.addProduct(machineId, body);
  }

  @Get(':machineId/:productId')
  findProduct(@Param('machineId') machineId, @Param('productId') productId) {
    return this.machineProductsService.findProduct(machineId, productId);
  }

  @Patch(':machineId/:productId')
  updateProduct(
    @Param('machineId') machineId,
    @Param('productId') productId,
    @Param('event') event,
    @Body()
    body: any,
  ) {
    return this.machineProductsService.updateProduct(
      machineId,
      productId,
      body,
    );
  }

  @Patch(':machineId/:productId/stock/:event')
  updateStock(
    @Param('machineId') machineId,
    @Param('productId') productId,
    @Param('event') event,
    @Body()
    body: any,
  ) {
    return this.machineProductsService.updateStock(
      machineId,
      productId,
      event,
      body,
    );
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
