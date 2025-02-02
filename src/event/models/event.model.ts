import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { HumanCategory } from "../../human_category/model/human_category.model";
import { Venue } from "../../venue/models/venue.model";
import { Lang } from "../../lang/models/lang.model";
import { EventType } from "../../event_type/models/event_type.model";
import { Ticket } from "../../ticket/models/ticket.model";

interface IEventCreationAttr {
  name: string;
  photo?: string;

  start_date: string;
  start_time: string;

  finish_date: string;
  finish_time: string;

  info?: string;
  eventTypeId: number;
  human_categoryId: number;
  venueId: number;
  langId: number;

  release_date: string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true, 
  })
  photo?: string;

  @Column({
    type: DataType.DATE, 
  })
  start_date: Date;

  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @Column({
    type: DataType.DATE, 
  })
  finish_date: Date;

  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  info?: string;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
  })
  human_categoryId: number;

  @BelongsTo(() => HumanCategory)
  human_category: HumanCategory;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
  })
  langId: number;

  @BelongsTo(() => Lang)
  lang: Lang;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  eventTypeId: number;

  @BelongsTo(() => EventType)
  event_type: EventType;

  @Column({
    type: DataType.DATE,
  })
  release_date: Date;
  @HasMany(()=>Ticket)
  ticket:Ticket[]
}
