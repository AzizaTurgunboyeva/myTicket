import { Injectable } from "@nestjs/common";
import { CreateStatusDto } from "./dto/create-status.dto";
import { UpdateStatusDto } from "./dto/update-status.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Status } from "./models/status.model";

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status) private readonly statusModel: typeof Status
  ) {}
  create(createStatusDto: CreateStatusDto) {
    return this.statusModel.create(createStatusDto);
  }

  findAll() {
    return this.statusModel.findAll();
  }

  findOne(id: number) {
    return this.statusModel.findByPk(id);
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    const updated = await this.statusModel.update(updateStatusDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0]
  }

  remove(id: number) {
    return this.statusModel.destroy({ where: { id } });
  }
}
