import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const PORT = process.env.APPLICATION_DEFAULT_PORT;
  const BASE_URI = process.env.APPLICATION_DEFAULT_URL;
  await app.listen(PORT, BASE_URI);
}
bootstrap();
