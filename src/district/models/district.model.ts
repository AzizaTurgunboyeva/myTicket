import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Region } from "../../region/models/region.model";

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
}
