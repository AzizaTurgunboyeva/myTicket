import { Injectable } from "@nestjs/common";
import { CreateCartItemDto } from "./dto/create-cart_item.dto";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CartItem } from "./models/cart_item.model";

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem) private readonly cartItemModel: typeof CartItem
  ) {}
  create(createCartItemDto: CreateCartItemDto) {
    return this.cartItemModel.create(createCartItemDto);
  }

  findAll() {
    return this.cartItemModel.findAll();
  }

  findOne(id: number) {
    return this.cartItemModel.findByPk(id);
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    const updated = await this.cartItemModel.update(updateCartItemDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.cartItemModel.destroy({ where: { id } });
  }
}
