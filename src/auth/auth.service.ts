import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";

import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { User } from "../users/models/user.model";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtServise: JwtService,
    private readonly userService: UsersService
  ) {}
  private async generateToken(user: User) {
    const payload = { id: user.id, email: user.email, roles: user.roles };
    return { token: this.jwtServise.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    const candidate = await this.userService.findUserByEmail(
      createUserDto.email
    );
    console.log("Existing user found:", candidate);

    if (candidate) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);

    return this.generateToken(newUser);
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findUserByEmail(signInDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki password xato");
    }

    const isValidPassword = await bcrypt.compare(
      signInDto.password,
      user.password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }
    for (const role of user.roles) {
      if (role.value !== signInDto.value.toUpperCase()) {
        return this.generateToken(user)
      }
    }

    return this.generateToken(user);
  }
}
