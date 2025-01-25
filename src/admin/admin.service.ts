import { Body, Injectable } from "@nestjs/common";
import { Admin } from "./models/admin.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  async createAdmin( createAdminDto: CreateAdminDto): Promise<Admin> {
    const newAdmin = await this.adminModel.create(createAdminDto);
    return newAdmin;
  }

   async findAllLang():Promise<Admin[]>{
          // return this.adminModel await shartmas o'zgaruvchiga yuklasak await
          return this.adminModel.findAll()
      }
  
      async findLangById(id:number):Promise<Admin |null>{
          return this.adminModel.findOne({where:{id}})
      }
      async updateLangById(id:number,updateLangDto:UpdateAdminDto ):Promise<Admin|null>{
          const Admin = await this.adminModel.update(updateLangDto,{
              where:{id},
              returning:true
          })
          console.log(Admin);
          return Admin[1][0]
          
      }
      async deletelangById(id:number):Promise<string>{
          const res= await this.adminModel.destroy({where:{id}})
          if(res==1){
              return `${id} o'chirildi`
  
          }
          return `Bunday ma'lumot topilmadi`
      }
  
}
