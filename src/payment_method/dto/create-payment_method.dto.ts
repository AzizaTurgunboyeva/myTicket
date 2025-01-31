import { ApiProperty } from "@nestjs/swagger";


export class CreatePaymentMethodDto {
  @ApiProperty({ example: "online", description: "Payment-method stringda" })
  name: string;
}
