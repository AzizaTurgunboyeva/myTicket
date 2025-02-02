import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/models/booking.model";

interface IDeliveryMethodCreationattr {
  name: string;
}

@Table({ tableName: "delivery_method" })
export class DeliveryMethod extends Model<
  DeliveryMethod,
  IDeliveryMethodCreationattr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(20),
  })
  name: string;

  @HasMany(()=>Booking)
  booking:Booking[]
}
