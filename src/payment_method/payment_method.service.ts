import { Injectable } from "@nestjs/common";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { InjectModel } from "@nestjs/sequelize";
import { PaymentMethod } from "./models/payment_method.model";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod) private paymentMethodModel: typeof PaymentMethod
  ) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodModel.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentMethodModel.findAll();
  }

  findOne(id: number) {
    return this.paymentMethodModel.findByPk(id);
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    const updated= await this.paymentMethodModel.update(updatePaymentMethodDto, {
      where:{ id},
      returning:true
    })
    return updated[1][0]
  }

  remove(id: number) {
    return this.paymentMethodModel.destroy({where:{id}})
  }
}
