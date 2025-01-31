import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/models/venue.model";
import { VenueVenueType } from "../../venue-venue-type/models/venue-venue-type.model";

interface IVenueTypeCreationattr {
  name: string;
}

@Table({ tableName: "venue_type" })
export class VenueType extends Model<
  VenueType,
  IVenueTypeCreationattr
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
  
  @BelongsToMany(()=>Venue,()=>VenueVenueType)
  venues:Venue[]
}
