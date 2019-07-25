import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.listen(3000, '0.0.0.0', () => {
        console.log(`app start at http://localhost:3000/graphql`)
    })
}
bootstrap();