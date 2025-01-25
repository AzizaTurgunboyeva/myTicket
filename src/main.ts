import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3003;
    const app = await NestFactory.create(AppModule);
    await app.listen(PORT, () => {
      console.log(`server is runnning at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
start();
