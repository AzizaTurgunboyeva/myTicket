import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";

interface ICustomerCartCreationAttr {
  customerId: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
}

@Table({ tableName: "customer_card" })
export class CustomerCard extends Model<
  CustomerCard,
  ICustomerCartCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER })
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({
    type: DataType.STRING,
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
  })
  number: string;
  @Column({
    type: DataType.STRING,
  })
  year: string;
  @Column({
    type: DataType.STRING,
  })
  month: string;
  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean
}
