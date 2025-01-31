import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "../../roles/model/role.model";




interface IUserRoleCreationAttr {
  userId: number;
  roleId: number;
}

@Table({ tableName: "user_role" })
export class UserRole extends Model<Model, IUserRoleCreationAttr> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;
}
