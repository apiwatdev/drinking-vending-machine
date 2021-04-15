import { Injectable } from '@nestjs/common';
import { CreateMachineProductDto } from './dto/create-machine-product.dto';
import { UpdateMachineProductDto } from './dto/update-machine-product.dto';
import { MachineProductsData } from '../../../data/data.js';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class MachineProductsService {
  machineProductList = MachineProductsData;
  create(createMachineProductDto: CreateMachineProductDto) {
    return 'This action adds a new machineProduct';
  }

  findAll() {
    return [...this.machineProductList];
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

  findAllProductByMachineId(id: string) {
    const machineProducts = this.machineProductList.find((v) => {
      return v.machineId == id;
    });

    return machineProducts.products || [];
  }

  findProduct(machineId: string, productId: string) {
    const machineProducts = this.machineProductList.find((v) => {
      return v.machineId == machineId;
    });

    const product = machineProducts.products.find((v) => {
      return v.id == productId;
    });

    return product;
  }

  updateStock(machineId: string, productId: string, event: string, body) {
    const machineProducts = this.machineProductList.find((v) => {
      return v.machineId == machineId;
    });

    const product = machineProducts.products.find((v) => {
      return v.id == productId;
    });

    switch (event) {
      case 'add':
        product.stock = product.stock += body.num;
      case 'decrease':
        product.stock = product.stock -= body.num;
    }
    return product;
  }

  updateProduct(machineId: string, productId: string, body) {
    const machineProducts = this.machineProductList.find((v) => {
      return v.machineId == machineId;
    });

    const product = machineProducts.products.find((v) => {
      return v.id == productId;
    });

    product['name'] = body['name'];
    product['description'] = body['description'];
    product['price'] = body['price'];

    return product;
  }

  addProduct(machineId: string, body) {
    const machineProducts = this.machineProductList.find((v) => {
      return v.machineId == machineId;
    });

    machineProducts.products.push({ id: uuidv4(), ...body });

    return machineProducts;
  }
}
