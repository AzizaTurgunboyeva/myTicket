import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";

import { Observable } from "rxjs";

@Injectable()
export class JwtSelfGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    console.log("auu");
    
    if(req.user.id != req.params.id){
      throw new ForbiddenException({message:"No access user"})
    }
    // console.log(req.user.id);
    
    return true;
  }
}
