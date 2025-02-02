import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./models/event.model";

@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private readonly eventModel: typeof Event) {}

  create(createEventDto: CreateEventDto) {
    return this.eventModel.create(createEventDto);
  }

  findAll() {
    return this.eventModel.findAll();
  }

  findOne(id: number) {
    return this.eventModel.findByPk(id);
  }

  async update(eventId: number, updateEventDto: UpdateEventDto) {
    function convertToDate(value: any): Date | undefined {
      return value ? new Date(value) : undefined;
    }

    const updatedData = {
      ...updateEventDto,
      start_date: convertToDate(updateEventDto.start_date),
      finish_date: convertToDate(updateEventDto.finish_date),
      release_date: convertToDate(updateEventDto.release_date),
    };

    await this.eventModel.update(updatedData, {
      where: { id: eventId },
    });

    return this.findOne(eventId); 
  }

  remove(id: number) {
    return this.eventModel.destroy({ where: { id } });
  }
}
