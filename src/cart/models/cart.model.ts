import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { TicketStatus } from "../../ticket_status/models/ticket_status.models";
import { CartItem } from "../../cart_item/models/cart_item.model";

interface ICartCreationAttr {
  customerId: number;
  createdAt: Date;
  finishedAt?: Date;
  statusId: number;
}

@Table({ tableName: "cart" })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number;

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

  @ForeignKey(() => TicketStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @BelongsTo(() => TicketStatus)
  ticket_status: TicketStatus;
  @HasMany(()=>CartItem)
  cart_item:CartItem[]
}
