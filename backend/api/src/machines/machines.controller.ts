import { Controller, Get } from '@nestjs/common';
import { MachinesService } from './machines.service';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machinesSerivce: MachinesService) {}
  @Get()
  findAll() {
    return this.machinesSerivce.findAll();
  }
}
