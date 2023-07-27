import { Injectable } from '@nestjs/common';
import { CreateCosaDto } from './dto/create-cosa.dto';
import { UpdateCosaDto } from './dto/update-cosa.dto';

@Injectable()
export class CosasService {
  create(createCosaDto: CreateCosaDto) {
    return 'This action adds a new cosa';
  }

  getNiceString(dato: string){
    return 'Aquí esta tu dato: ' + dato;
  }

  findOne(id: number) {
    return `This action returns a #${id} cosa`;
  }

  update(id: number, updateCosaDto: UpdateCosaDto) {
    return `This action updates a #${id} cosa`;
  }

  remove(id: number) {
    return `This action removes a #${id} cosa`;
  }
}
