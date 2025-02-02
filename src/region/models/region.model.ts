import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";

interface IRegionCreationAttr {
  name: string;
  image: string;
}

@Table({ tableName: "region" })
export class Region extends Model<Region, IRegionCreationAttr> {
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
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @HasMany(() => District)
  distict: District[];
  @HasMany(() => CustomerAddress)
  customer_address: CustomerAddress[];
}
