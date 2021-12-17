import * as nest from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await nest.NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
