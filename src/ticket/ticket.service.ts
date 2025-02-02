import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./models/ticket.model";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket) private readonly ticketModel: typeof Ticket
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketModel.create(createTicketDto);
  }

  findAll() {
    return this.ticketModel.findAll();
  }

  findOne(id: number) {
    return this.ticketModel.findByPk(id);
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const updated = await this.ticketModel.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.ticketModel.destroy({ where: { id } });
  }
}
