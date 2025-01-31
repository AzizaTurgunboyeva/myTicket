import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../../users/models/user.model";
import { UserRole } from "../../users/models/user-role.model";


interface IRoleCreationAttr {
  value: string;
  description: string;
}
@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING(30),
    allowNull:false,
    unique:true
  })
  value: string;
  @Column({
    type: DataType.STRING,
  })
  description: string;
  @BelongsToMany(()=>User,()=>UserRole)
    users:User[]
}
