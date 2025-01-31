import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators/roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtservice: JwtService,
    private readonly reflector: Reflector
  ) {}
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    //rolega tekshirish
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(//getAll hammasi class va handlerniyam oladi
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );
    if (!requiredRoles) {
      return true;//access all
    }

    const req = context.switchToHttp().getRequest();
    console.log(req);
    const authHeader = req.headers.authorization;
    //check out
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "There isn't token on header",
      });
    }
    const bearer = authHeader.split(" ")[0]; //ochib qoy
    const token = authHeader.split(" ")[1];

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({ message: "Invalid Bearer token" });
    }
    let user: any;
    try {
      user = this.jwtservice.verify(token);
    } catch (error) {
      console.log(error);

      throw new UnauthorizedException({ message: "Token verficaton failed" });
    }
    //logic
    req.user = user;
    const permission = user.roles.some((role: any) => {
      return requiredRoles.includes(role.value)
    });

    if(!permission){
      throw new ForbiddenException({
        message:"You haven't access"
      })
    }
    return true;
  }
}
