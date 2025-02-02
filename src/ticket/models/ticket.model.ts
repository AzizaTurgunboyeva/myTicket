import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { TicketType } from "../dto/create-ticket.dto";
import { Event } from "../../event/models/event.model";
import { Seat } from "../../seat/models/seat.model";
import { TicketStatus } from "../../ticket_status/models/ticket_status.models";
import { CartItem } from "../../cart_item/models/cart_item.model";

interface ITicketCreationAttr {
  eventId: number;
  seatId: number;
  price: number;
  service_fee: number;
  statusId: number;
  ticket_type: TicketType;
}
@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
  })
  eventId: number;

  @BelongsTo(() => Event)
  event: Event;

  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seatId: number;

  @BelongsTo(() => Seat)
  seat: Seat;
  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  service_fee: number;

  @ForeignKey(() => TicketStatus)
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;

  @BelongsTo(() => TicketStatus)
  ticket_status: TicketStatus;

  @Column({
    type: DataType.ENUM("online", "offline", "deliver"),
    allowNull: false,
  })
  ticket_type: string;

  @HasMany(()=>CartItem)
  cart_item:CartItem[]
}
