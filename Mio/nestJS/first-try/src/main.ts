import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

//Funcion de arranque (main)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //implementación de documentación en la API
  const config = new DocumentBuilder()
    .setTitle('Title') //Title
    .setDescription('Description') //Description
    .setVersion('1.0') //Versión de la API
    .addTag('cosas') //Un tag para tener mayor orden en la documentación
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  //Se indica en que puerto se pondra la API
  await app.listen(3000);
}
bootstrap();
