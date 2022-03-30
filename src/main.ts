import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
const port = 3008;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
  app.use(csurf());

  console.log(await app.getUrl(), 'http://localhost:' + port);
  console.log('Mongo GUI URL: ', 'http://localhost:27022');
}
bootstrap();
