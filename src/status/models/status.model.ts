
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IStatusCreationAttr {
  name: string;
}

@Table({ tableName: "status" })
export class Status extends Model<Status, IStatusCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
