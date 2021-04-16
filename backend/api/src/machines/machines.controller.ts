import { Controller, Get, Param } from '@nestjs/common';
import { MachinesService } from './machines.service';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machinesSerivce: MachinesService) {}
  @Get()
  findAll() {
    return this.machinesSerivce.findAll();
  }

  @Get(':machineId')
  findOne(@Param('machineId') machineId: string) {
    return this.machinesSerivce.findOne(machineId);
  }
}
