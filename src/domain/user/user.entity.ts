import { UserInterface } from "./user.interface";
import { v4 as Uuid } from "uuid";

export class UserEntity implements UserInterface {
  uuid: string;
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string) {
    this.uuid = Uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
