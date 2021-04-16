import { Injectable } from '@nestjs/common';
import { CreateMachineProductDto } from './dto/create-machine-product.dto';
import { UpdateMachineProductDto } from './dto/update-machine-product.dto';
import { MachineProductsData } from '../../../data/data.js';
import { v4 as uuidv4 } from 'uuid';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MachineProductsService {
  constructor(private readonly mailerService: MailerService) {}
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

  async findProduct(machineId: string, productId: string) {
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
        product.stock = product.stock + body.num;
      case 'decrease':
        if (
          this.checkNearlyOutOfItem(product.stock, product.stock - body.num)
        ) {
          this.sendNotiToNearlyOutOfItem(machineId, product);
        }
        product.stock = product.stock - body.num;
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

  sendNotiToNearlyOutOfItem(machineId, product) {
    this.mailerService
      .sendMail({
        from: 'NotReply@drinkingVendingMachine.com', // sender
        to: 'it.apiwat.dev@gmail.com', // list of receivers
        subject: 'Machine Alert : Nearly Out Of Items', // Mail subject
        html: `<b>Machine: ${machineId}</b><br>drink: ${product.name}<br>stock: ${product.stock}`, // HTML body
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  checkNearlyOutOfItem(oldStock: number, newStock: number) {
    if (oldStock <= 10) {
      return false;
    }

    if (newStock <= 10) {
      return true;
    }

    return false;
  }
}
