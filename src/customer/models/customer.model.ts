import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Lang } from "../../lang/models/lang.model";
import { CustomerCard } from "../../customer_card/models/customer_card.model.";

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  password: string;
  email: string;
  birt_date: Date;
  gender: string;
  langId: number;
  refreshToken: string;
}
@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
  })
  first_name: string;
  @Column({
    type: DataType.STRING,
  })
  last_name: string;
  @Column({
    type: DataType.STRING,
  })
  phone: string;
  @Column({
    type: DataType.STRING,
  })
  password: string;
  @Column({
    type: DataType.STRING,
  })
  email: string;
  @Column({
    type: DataType.STRING,
  })
  birth_date: Date;
  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
  })
  langId: number;

  @BelongsTo(() => Lang)
  lang: Lang;

  @Column({
    type: DataType.STRING,
  })
  refreshToken: string;
  @HasMany(()=>CustomerCard)
  customer_card:CustomerCard[]
}
