import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './models/venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private readonly venuePhotoModel:typeof VenuePhoto){}
  
  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoModel.create(createVenuePhotoDto)
  }

  findAll() {
    return this.venuePhotoModel.findAll()
  }

  findOne(id: number) {
    return this.venuePhotoModel.findByPk(id)
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const updated= await this.venuePhotoModel.update(updateVenuePhotoDto,{
      where:{id},
      returning:true
    })
    return updated[1][0]
  }

  remove(id: number) {
    return this.venuePhotoModel.destroy({where:{id}})
  }
}
