import { UserInterface } from "./user.interface"

export interface IUserRepository {
  create(userIn: UserInterface): Promise< UserInterface | null>
  findById(uuid: string): Promise<UserInterface | null>
  update(uuid: string, userUp: UserInterface): Promise<UserInterface | null>
  delete(uuid: string): Promise<UserInterface | null>
  findAll(): Promise<UserInterface[] | null>
}