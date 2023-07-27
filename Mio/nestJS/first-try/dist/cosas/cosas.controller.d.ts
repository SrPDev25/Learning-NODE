import { CosasService } from './cosas.service';
import { CreateCosaDto } from './dto/create-cosa.dto';
import { UpdateCosaDto } from './dto/update-cosa.dto';
export declare class CosasController {
    private readonly cosasService;
    constructor(cosasService: CosasService);
    create(createCosaDto: CreateCosaDto): string;
    getDato(dato1: string): string;
    findOne(id: string): string;
    update(id: string, updateCosaDto: UpdateCosaDto): string;
    remove(id: string): string;
}
