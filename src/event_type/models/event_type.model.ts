import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Event } from "../../event/models/event.model";

interface IEventTypeCreationAttr {
  name: string;
  parent_event_typeId: number;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  parent_event_typeId: number;

  @BelongsTo(() => EventType, { foreignKey: "parent_event_typeId" })
  parent: EventType;

  @HasMany(() => EventType, "parent_event_typeId")
  children: EventType[];
  @HasMany(()=>Event)
  event:Event[]

}
