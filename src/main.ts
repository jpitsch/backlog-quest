import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    helmet({ 
      contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false 
    })
  ); 
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
