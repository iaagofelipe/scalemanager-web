import { Role } from "src/app/model/role";

export interface User {
  name: String;
  password: String;
  id: number;
  createTime: Date;
  role: Role[];
}
