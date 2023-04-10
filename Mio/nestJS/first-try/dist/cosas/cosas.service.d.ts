import { CreateCosaDto } from './dto/create-cosa.dto';
import { UpdateCosaDto } from './dto/update-cosa.dto';
export declare class CosasService {
    create(createCosaDto: CreateCosaDto): string;
    getNiceString(dato: string): string;
    findOne(id: number): string;
    update(id: number, updateCosaDto: UpdateCosaDto): string;
    remove(id: number): string;
}
