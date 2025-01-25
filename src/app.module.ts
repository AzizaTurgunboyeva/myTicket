import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { LangModule } from './lang/lang.module';
import { Lang } from "./lang/models/lang.model";
import { HumanCategoryModule } from './human_category/human_category.module';
import { HumanCategory } from "./human_category/model/human_category.model";
import { AdminModule } from './admin/admin.module';
import { Admin } from "./admin/models/admin.model";
import { CustomerModule } from './customer/customer.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      port: Number(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Lang,HumanCategory,Admin],
      autoLoadModels: true,//modelllarni avtomatik topib olish
      sync: { alter: true },//db bilan bog'lanish
      logging: true,
    }),
    LangModule,
    HumanCategoryModule,
    AdminModule,
    CustomerModule,
    PaymentMethodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
