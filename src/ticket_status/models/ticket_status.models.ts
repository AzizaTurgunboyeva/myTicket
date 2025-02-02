import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Cart } from "../../cart/models/cart.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface ITicketStatusCreationAttr {
  name: string;
}

@Table({ tableName: "ticket_status" })
export class TicketStatus extends Model<
  TicketStatus,
  ITicketStatusCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING(15),
  })
  name: string;

  @HasMany(() => Cart)
  cart: Cart[];
  @HasMany(() => Ticket)
  ticket: Ticket[];
}
