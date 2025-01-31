import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IDeliveryMethodCreationattr {
  name: string;
}

@Table({ tableName: "delivery_method" })
export class DeliveryMethod extends Model<
  DeliveryMethod,
  IDeliveryMethodCreationattr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(20),
  })
  name: string;
}
