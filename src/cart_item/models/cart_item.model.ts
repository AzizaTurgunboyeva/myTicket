import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { Customer } from "../../customer/models/customer.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface ICartItemCrationAttr {
  ticketId: number;
  cartId: number;
  quantity: number;
}

@Table({ tableName: "cart_item" })
export class CartItem extends Model<CartItem, ICartItemCrationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;
  @Column({
    type:DataType.INTEGER
  })
  quantity:number

}
