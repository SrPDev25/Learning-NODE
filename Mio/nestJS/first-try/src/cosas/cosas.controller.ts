import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CosasService } from './cosas.service';
import { CreateCosaDto } from './dto/create-cosa.dto';
import { UpdateCosaDto } from './dto/update-cosa.dto';
import { ApiTags } from '@nestjs/swagger';

//Todo el recurso creado con "nest g resource cosas", esto agiliza bastante la ceración de recursos
@ApiTags('cosas')
@Controller('cosas')
export class CosasController {
  constructor(private readonly cosasService: CosasService) {}

  //Curiosidad, llamada http: http://localhost:3000/users/{userId}/posts/{postId}
  //@Post se utiliza para recibir una llamada HTTP con nuevos datos para crear o actualizar un elemento
  @Post()
  create(@Body() createCosaDto: CreateCosaDto) {
    return this.cosasService.create(createCosaDto);
  }
  /**
   * @Get se utiliza para retornar un datos en formato texto plano
   * Se pueden pedir datos: @Get(':dato1/textoParaMayorEntendimiento/:dato2)
   * el metodo al que llama el get: getDatos(@Param('dato1') dato1: string, @Param('dato2') dato2: string)
   * @returns
   */
  @Get('retorno/:dato')
  getDato(@Param('dato') dato1: string): string {
    return this.cosasService.getNiceString(dato1);
  }
  // Get es el único verbo al que se puede llamar desde la barra del navegador, ya que desde ella no puedes enviar el verbo
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cosasService.findOne(+id);
  }

  //El body son datos que se pueden
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCosaDto: UpdateCosaDto) {
    return this.cosasService.update(+id, updateCosaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cosasService.remove(+id);
  }
}
