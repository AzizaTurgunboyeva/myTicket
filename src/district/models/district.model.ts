import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Region } from "../../region/models/region.model";
import { CustomerAddress } from "../../customer_address/models/customer_address.model";

interface IDistrictCreationAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: "district" })
export class District extends Model<District, IDistrictCreationAttr> {
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

  @ForeignKey(() => Region)
  @Column({ 
    type: DataType.INTEGER
   })
  regionId:number
  @BelongsTo(() => Region)
  region: Region[];
  @HasMany(()=>CustomerAddress)
  customer_address:CustomerAddress[]
}
