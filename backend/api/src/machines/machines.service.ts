import { Injectable } from '@nestjs/common';
import { MachinesData } from '../../../data/data.js';

@Injectable()
export class MachinesService {
  machines = MachinesData;
  findAll() {
    return this.machines;
  }
  findOne(machineId) {
    return this.machines.find((machine) => machine.id === machineId);
  }
}
