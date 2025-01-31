import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './models/venue.model';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private readonly venueModel:typeof Venue){}
  create(createVenueDto: CreateVenueDto) {
    return this.venueModel.create(createVenueDto)
  }

  findAll() {
    return this.venueModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return this.venueModel.findByPk(id)
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return `This action updates a #${id} venue`;
  }

  remove(id: number) {
    return this.venueModel.destroy({where:{id}})
  }
}
