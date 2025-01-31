import { PartialType } from '@nestjs/swagger';
import { CreateVenueVenueTypeDto } from './create-venue-venue-type.dto';

export class UpdateVenueVenueTypeDto extends PartialType(CreateVenueVenueTypeDto) {}
