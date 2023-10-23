import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import 'dotenv/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const config = new DocumentBuilder()
    .setTitle('NoDeMo API')
    .setDescription('This is the API doc for the NoDeMo project (WIP)')
    .setVersion('0.1')
    .addTag('NestJS')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT = process.env.APPLICATION_DEFAULT_PORT;
  const BASE_URI = process.env.APPLICATION_DEFAULT_URL;
  await app.listen(PORT, BASE_URI);
}
bootstrap();
