import { Injectable } from '@nestjs/common';
import { CreateVenueVenueTypeDto } from './dto/create-venue-venue-type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue-venue-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueVenueType } from './models/venue-venue-type.model';

@Injectable()
export class VenueVenueTypeService {
  constructor(@InjectModel(VenueVenueType) private readonly venueVenueTypeModel:typeof VenueVenueType){}
  create(createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeModel.create(createVenueVenueTypeDto)
  }

  findAll() {
    return this.venueVenueTypeModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.venueVenueTypeModel.findByPk(id)
  }

  async update(id: number, updateVenueVenueTypeDto: UpdateVenueVenueTypeDto) {
    const updated = await this.venueVenueTypeModel.update(
      updateVenueVenueTypeDto,
      {
        where: { id },
        returning: true,
      }
    );
    return updated[1][0];
  }

  remove(id: number) {
    return this.venueVenueTypeModel.destroy({where:{id}});
  }
}
