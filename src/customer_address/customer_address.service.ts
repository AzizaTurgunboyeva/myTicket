import { Injectable } from '@nestjs/common';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CustomerAddress } from './models/customer_address.model';

@Injectable()
export class CustomerAddressService {
  constructor(@InjectModel(CustomerAddress) private readonly customerAddressModel: typeof CustomerAddress){}
  create(createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressModel.create(createCustomerAddressDto)
  }

  findAll() {
    return this.customerAddressModel.findAll()
  }

  findOne(id: number) {
    return this.customerAddressModel.findByPk(id)
  }

  async update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto) {
   const updated = await this.customerAddressModel.update(updateCustomerAddressDto, {
     where: { id },
     returning: true,
   });
   return updated[1][0];
  }

  remove(id: number) {
    return this.customerAddressModel.destroy({where:{id}})
  }
}
