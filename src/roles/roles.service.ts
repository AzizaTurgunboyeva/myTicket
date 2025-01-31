import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./model/role.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}
  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({
      ...createRoleDto,
      value: createRoleDto.value.toUpperCase(),
    });
  }

  findAll() {
    return this.roleModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id);
  }
  findRoleByValue(value:string) {
    return this.roleModel.findOne({where:{value:value.toUpperCase()}})
  }
  // async update(id: number, updateRoleDto: UpdateRoleDto) {
  //   const updated = await this.roleModel.update(
  //     updateRoleDto,
  //     {
  //       where: { id },
  //       returning: true,
  //     }
  //   );
  //   return updated[1][0];
  // }

  remove(id: number) {
    return this.roleModel.destroy({where:{id}})
  }
}
