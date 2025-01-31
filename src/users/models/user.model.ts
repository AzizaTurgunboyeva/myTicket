import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "../../roles/model/role.model";
import { UserRole } from "./user-role.model";

interface IUserCreationAttr {
  name: string;
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING(30),
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;
  @Column({
    type: DataType.STRING,
  })
  password: string;
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
