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
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { TicketStatusModule } from './ticket_status/ticket_status.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { CartStatusModule } from './cart_status/cart_status.module';
import { VenueTypeModule } from './venue_type/venue_type.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/model/role.model";
import { PaymentMethod } from "./payment_method/models/payment_method.model";
import { DeliveryMethod } from "./delivery_method/models/delivery_method.model";
import { TicketStatus } from "./ticket_status/models/ticket_status.models";
import { SeatType } from "./seat_type/models/seat_type.model";
import { CartStatus } from "./cart_status/models/cart_status.model";
import { UsersModule } from './users/users.module';
import { User } from "./users/models/user.model";
import { UserRole } from "./users/models/user-role.model";
import { AuthModule } from './auth/auth.module';
import { RegionModule } from './region/region.module';
import { Region } from "./region/models/region.model";
import { DistrictModule } from './district/district.module';
import { District } from "./district/models/district.model";
import { VenueModule } from './venue/venue.module';
import { VenueVenueTypeModule } from './venue-venue-type/venue-venue-type.module';
import { VenueVenueType } from "./venue-venue-type/models/venue-venue-type.model";
import { VenueType } from "./venue_type/models/venue_type.venue";
import { Venue } from "./venue/models/venue.model";

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
      models: [Lang,HumanCategory,Admin,Region,District,Role,User,UserRole,PaymentMethod,DeliveryMethod,TicketStatus,SeatType,Venue,VenueVenueType,VenueType],
      autoLoadModels: true,//modelllarni avtomatik topib olish
      sync: { alter: true },//db bilan bog'lanish
      logging: false,
    }),
    LangModule,
    HumanCategoryModule,
    AdminModule,
    CustomerModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    TicketStatusModule,
    SeatTypeModule,
    CartStatusModule,
    VenueTypeModule,
    RolesModule,
    UsersModule,
    AuthModule,
    RegionModule,
    DistrictModule,
    VenueModule,
    VenueVenueTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
