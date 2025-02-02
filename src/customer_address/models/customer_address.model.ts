import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Customer } from "../../customer/models/customer.model";
import { Region } from "../../region/models/region.model";
import { District } from "../../district/models/district.model";

interface ICustomerAddressCreationAttr {
  customerId: number;
  name: string;
  regionId: number;
  districtId: number;
  street: string;
  house: string;
  flat?: number;
  location: string;
  post_index: string;
  info?: string; // ✅ Fixed incorrect type
}

@Table({ tableName: "customer_address" })
export class CustomerAddress extends Model<
  CustomerAddress,
  ICustomerAddressCreationAttr
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

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  regionId: number;

  @BelongsTo(() => Region)
  region: Region;

  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER })
  districtId: number;

  @BelongsTo(() => District)
  district: District;

  @Column({ type: DataType.STRING })
  street: string;

  @Column({ type: DataType.STRING })
  house: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  flat: number;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  post_index: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  info?: string;
}
