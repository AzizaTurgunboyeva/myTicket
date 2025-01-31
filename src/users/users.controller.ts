import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRoleDTo } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { JwtSelfGuard } from '../guards/jst-self.guard';
import { Roles } from '../decorators/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';

@Controller("users")

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @HttpCode(200)
  @Roles("ADMIN")//access ,tepaga ham qoysa boladi
  @UseGuards(RolesGuard)
  @Post("add-role")
  addRole(@Body() addRoleDto: AddRoleDTo) {
    return this.usersService.addRole(addRoleDto);
  }

  @Post("remove-role")
  removeRole(@Body() removerRoleDto: AddRoleDTo) {
    return this.usersService.removeRole(removerRoleDto);
  }

  @HttpCode(200)
  @Post("activate")
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }

  @HttpCode(200)
  @Post("de-activate")
  deactivateUser(@Body() deactivateUserDto: ActivateUserDto) {
    return this.usersService.deactivateUser(deactivateUserDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get("/email/:email")
  findUserByEmail(@Body("email") email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @UseGuards(JwtSelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}
