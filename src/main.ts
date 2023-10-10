import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.APPLICATION_DEFAULT_PORT;
  const BASE_URI = process.env.APPLICATION_DEFAULT_URL;
  await app.listen(PORT, BASE_URI);
}
bootstrap();
