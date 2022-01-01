import {NestFactory} from "@nestjs/core";
import {Transport} from "@nestjs/microservices";
import {AppModule} from "./app.module";

async function bootstrap() {
  const microservicesConfig: any = {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8888,
    },
  };
  const app = await NestFactory.createMicroservice(
    AppModule,
    microservicesConfig
  );
  await app.listen();
}
bootstrap();
