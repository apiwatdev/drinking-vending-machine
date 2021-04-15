import { Injectable } from '@nestjs/common';
import { CreateMachineProductDto } from './dto/create-machine-product.dto';
import { UpdateMachineProductDto } from './dto/update-machine-product.dto';
@Injectable()
export class MachineProductsService {
  create(createMachineProductDto: CreateMachineProductDto) {
    return 'This action adds a new machineProduct';
  }

  findAll() {
    return `This action returns all machineProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} machineProduct`;
  }

  update(id: number, updateMachineProductDto: UpdateMachineProductDto) {
    return `This action updates a #${id} machineProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} machineProduct`;
  }
}
