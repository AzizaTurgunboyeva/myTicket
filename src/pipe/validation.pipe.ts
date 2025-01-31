import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { ValidationException } from "../exception/validation.exception";

@Injectable()
export class CustomerValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    console.log(metatype);

    const object = plainToInstance(metatype, value);
    console.log(object);

    const errors = await validate(object);
    if (errors.length > 0) {
      let messages = errors.map((err) => {
        return `${err.property}: ${err.value} - ${JSON.stringify(err.constraints)}`;
      });
      throw new ValidationException(messages);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
