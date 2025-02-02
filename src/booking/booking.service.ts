import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './models/booking.model';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private readonly bookingModel: typeof Booking ){}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingModel.create(createBookingDto)
  }

  findAll() {
    return this.bookingModel.findAll()
  }

  findOne(id: number) {
    return this.bookingModel.findByPk(id)
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const updated = await this.bookingModel.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.bookingModel.destroy({where:{id}})
  }
}
