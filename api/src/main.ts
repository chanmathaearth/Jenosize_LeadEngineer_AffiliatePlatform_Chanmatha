import 'dotenv/config'; // Must be first — loads .env into process.env before any module initializes
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global prefix
  app.setGlobalPrefix('api');

  // Global validation pipe — validates DTOs using class-validator decorators
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strip properties not in the DTO
      forbidNonWhitelisted: true, // throw 400 if unknown properties are sent
      transform: true, // auto-transform payloads to DTO class instances
    }),
  );
  app.enableCors({
    origin: true,
  });
  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('Minimal NestJS + Prisma + PostgreSQL API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  // Read PORT from ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000;

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}/api`);
  console.log(`📖 Swagger docs at:http://localhost:${port}/api/docs`);
}

bootstrap();
