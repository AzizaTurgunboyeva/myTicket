import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IPaymentMethhodCreationAttr {
  name: string;
}
@Table({ tableName: "payment_method" })
export class PaymentMethod extends Model<
  PaymentMethod,
  IPaymentMethhodCreationAttr
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
