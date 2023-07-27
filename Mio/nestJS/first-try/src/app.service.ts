import { Injectable } from '@nestjs/common';

//@Injectable es el procurador de servicios, en el se encuentra la lógica de nestJS
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): string[] {
    return ['Jesus', 'Crist', 'si'];
  }
}
