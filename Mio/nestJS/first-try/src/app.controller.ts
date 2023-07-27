import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Aquel que recibe las llamadas HTTP
@Controller('primero') //El 'primero' es al dirección base, esto se refiere que recibira la llamada de web.com/primero
export class AppController {
  constructor(private readonly appService: AppService) {}

  //El verbo Get, es aquel que devuelve un dato
  @Get('users') //http://localhost:3000/primero/users
  getUsers(): string[]{
    return this.appService.getUsers(); //LLama al servicio
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
