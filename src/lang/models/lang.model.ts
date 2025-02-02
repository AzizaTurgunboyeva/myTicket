import {
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Event } from "../../event/models/event.model";

interface ILangCreationAttr {
  name: string;
}

@Table({ tableName: "lang" })
export class Lang extends Model<Lang, ILangCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
  })
  name: string;
  @HasMany(() => Customer)
  customer: Customer[];
  @HasMany(() => Event)
  event: Event[];
}
