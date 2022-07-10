import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const host = AppModule.isDev
    ? `${AppModule.host}:${AppModule.port}`
    : AppModule.host;

  await app.listen(AppModule.port);
  Logger.log(`Listen on ${AppModule.schemes}://${host}`, 'NestApplication');
}
bootstrap();
