import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private readonly customerModel:typeof Customer){}
  create(createCustomerDto: CreateCustomerDto) {
    return this.customerModel.create(createCustomerDto)
  }

  findAll() {
    return this.customerModel.findAll()
  }

  findOne(id: number) {
    return this.customerModel.findByPk(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const updated= await this.customerModel.update(updateCustomerDto,{
      where:{id},
      returning:true
    })
    return updated[1][0]
  }

  remove(id: number) {
    return this.customerModel.destroy({where:{id}})
  }
}
