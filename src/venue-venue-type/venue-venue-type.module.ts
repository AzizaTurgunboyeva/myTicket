import { Module } from '@nestjs/common';
import { VenueVenueTypeService } from './venue-venue-type.service';
import { VenueVenueTypeController } from './venue-venue-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueVenueType } from './models/venue-venue-type.model';

@Module({
  imports:[SequelizeModule.forFeature([VenueVenueType])],
  controllers: [VenueVenueTypeController],
  providers: [VenueVenueTypeService],
})
export class VenueVenueTypeModule {}
