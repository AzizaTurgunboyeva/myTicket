import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty()
  sector: string;
  @ApiProperty()
  row_number: number;
  @ApiProperty()
  number: number;
  @ApiProperty()
  venueId: number;
  @ApiProperty()
  seat_typeId: number;
  @ApiProperty()
  location_in_schema: string;
}
