import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { Status } from "../../status/models/status.model";
import { Cart } from "../../cart/models/cart.model";

interface IBookingCreationattr {
  cartId: number;
  createdAt: Date;
  finishedAt: Date;
  payment_methodId: number;
  delivery_methodId: number;
  dicount_couponId: number;
  statusId: number;
}
@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookingCreationattr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;

  @Default(DataType.NOW)
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  finishedAt?: Date;

  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
  })
  payment_methodId: number;

  @BelongsTo(() => PaymentMethod)
  payment_method: PaymentMethod;

  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
  })
  delivery_methodId: number;

  @BelongsTo(() => DeliveryMethod)
  delivery_method: DeliveryMethod;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  dicount_couponId: number;

  @ForeignKey(() => Status)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @BelongsTo(() => Status)
  status: Status;
}
