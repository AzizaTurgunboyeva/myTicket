import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { CustomerValidationPipe } from "./pipe/validation.pipe";
import { ValidationPipe } from "@nestjs/common";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3003;
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(new CustomerValidationPipe)
     const config = new DocumentBuilder()
       .setTitle("myTicket")
       .setDescription(" The myTicket API description")
       .setVersion("1.0")
       .addTag("myTicket")
       .build();
     const documentFactory = () => SwaggerModule.createDocument(app, config);
     SwaggerModule.setup("swagger", app, documentFactory);
     app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log(`Server is runnning at http://localhost:${PORT}`);
    });
    
  } catch (error) {
    console.log(error.message);
  }
}
start();
