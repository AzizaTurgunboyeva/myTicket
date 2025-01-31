import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ISeatTypeCretationAttr {
  name: string;
}
@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, ISeatTypeCretationAttr> {
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
}
