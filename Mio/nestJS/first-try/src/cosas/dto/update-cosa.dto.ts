import { PartialType } from '@nestjs/mapped-types';
import { CreateCosaDto } from './create-cosa.dto';

export class UpdateCosaDto extends PartialType(CreateCosaDto) {}
