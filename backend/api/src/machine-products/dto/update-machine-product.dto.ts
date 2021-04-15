import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineProductDto } from './create-machine-product.dto';

export class UpdateMachineProductDto extends PartialType(CreateMachineProductDto) {}
