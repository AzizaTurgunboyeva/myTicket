import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.venue';

@Injectable()
export class VenueTypeService {
   constructor(@InjectModel(VenueType) private readonly venueTypeModel:typeof VenueType){}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeModel.create(createVenueTypeDto)
  }

  findAll() {
    return this.venueTypeModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.venueTypeModel.findByPk(id)
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const updated = await this.venueTypeModel.update(updateVenueTypeDto, {
       where: { id },
       returning: true,
     });
    return updated[1][0];
  }

  remove(id: number) {
    return this.venueTypeModel.destroy({where:{id}})
  }
}
