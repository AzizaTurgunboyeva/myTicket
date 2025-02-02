import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { District } from "../../district/models/district.model";
import { Region } from "../../region/models/region.model";
import { VenueType } from "../../venue_type/models/venue_type.venue";
import { VenueVenueType } from "../../venue-venue-type/models/venue-venue-type.model";
import { VenuePhoto } from "../../venue_photo/models/venue_photo.model";





interface IVenueCreationAttr {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string[];
  regionId: number;
  districtId: number;
}
@Table({ tableName: "venue" })
export class Venue extends Model<Venue, IVenueCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
  })
  name: string;
  @Column({
    type: DataType.STRING,
  })
  address: string;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.STRING,
  })
  site: string;
  @Column({
    type: DataType.STRING(20),
  })
  phone: string;
  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  schema: string[];
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsTo(() => Region)
  region: Region;

  @BelongsTo(() => District)
  district: District;

  @BelongsToMany(() => VenueType, () => VenueVenueType)
  venueTypes: VenueType[];

  @HasMany(() => VenuePhoto)
  venuePhoto: VenuePhoto[];
}
