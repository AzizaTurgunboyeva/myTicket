import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { SeatType } from "../../seat_type/models/seat_type.model";
import { Venue } from "../../venue/models/venue.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface ISeatCreationAttr {
  sector: string;
  row_number: number;
  number: number;
  venueId: number;
  seat_typeId: number;
  location_in_schema: string;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, ISeatCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  sector: string;

  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seat_typeId: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @BelongsTo(() => SeatType)
  seatType: SeatType;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
