import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PaymentMethodService } from "./payment_method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment_method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment_method.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("payment-method")
@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @Get()

  findAll() {
    return this.paymentMethodService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @Patch("/update/:id")
  update(
    @Param("id") id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto
  ) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @Delete("/delete/:id")
  remove(@Param("id") id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
