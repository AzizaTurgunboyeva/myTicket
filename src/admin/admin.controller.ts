import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { Admin } from "./models/admin.model";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Get()
  async findAllLang(): Promise<Admin[]> {
    return this.adminService.findAllLang();
  }
  @Get(":id")
  async findlangById(@Param("id") id: number): Promise<Admin | null> {
    return this.adminService.findLangById(id);
  }
  @Patch("/update/:id")
  async updatelangById(
    @Param("id") id: number,
    @Body() updateLangDto: UpdateAdminDto
  ): Promise<Admin | null> {
    return this.adminService.updateLangById(id, updateLangDto);
  }
  @Delete("/delete/:id")
  async deleteLangById(@Param("id") id: number) {
    return this.adminService.deletelangById(id);
  }
}
