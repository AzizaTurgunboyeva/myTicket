import {
  Injectable,
  NotFoundException,
  NotImplementedException,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./models/user.model";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/model/role.model";
import { UserRole } from "./models/user-role.model";
import { AddRoleDTo } from "./dto/add-role.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(UserRole) private userRoleModel: typeof UserRole,
    @InjectModel(Role) private roleModel: typeof Role,
    private readonly roleService: RolesService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findRoleByValue(createUserDto.value); //rolemetodidn foydalanish
    // const role2 = await this.roleModel.findOne({
    //   where: { value: createUserDto.value.toUpperCase() },
    // });
    if (!role) {
      throw new NotFoundException("Role not found");
    }
    //  await this.userModel.create({userId:newUser.id,roleId:role.id})//pastdagini vazifasi bilan =
    await newUser.$set("roles", [role.id]); //newUser id oladi
    await newUser.save();
    newUser.roles = [role]; //payload uchun
    return newUser;
  }
  async addRole(addRoleDto: AddRoleDTo) {
    const user = await this.userModel.findByPk(addRoleDto.userId);
    const role = await this.roleService.findRoleByValue(addRoleDto.value);

    if (role && user) {
      await user.$add("roles", role.id);
      const updatedUser = await this.userModel.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updatedUser;
    }
    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async removeRole(addRoleDto: AddRoleDTo) {
    const user = await this.userModel.findByPk(addRoleDto.userId);
    const role = await this.roleService.findRoleByValue(addRoleDto.value);

    if (role && user) {
      await user.$remove("roles", role.id);
      const updatedUser = await this.userModel.findByPk(addRoleDto.userId, {
        include: { all: true },
      });
      return updatedUser;
    }
    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = true;
      await user.save();
      return user;
    }
  }

  async deactivateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = false;
      await user.save();
      return user;
    }
  }
 
  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.userModel.findByPk(id)
  }
  findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { email: email },
      include: {
        model: Role,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
