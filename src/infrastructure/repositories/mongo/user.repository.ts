import { IUserRepository } from "../../../domain/user/IUser.repository";
import { UserInterface } from "../../../domain/user/user.interface";
import { UserModel } from "../../db/mongo/schema/user.schema";

export class UserRepository implements IUserRepository {
  async create(userIn: UserInterface): Promise<any> {
    return await UserModel.create(userIn)
  }

  async findById(uuid: string): Promise<any> {
    return await UserModel.findOne({uuid})
  }

  async update(uuid: string, userUp: UserInterface): Promise<any> {
    return await UserModel.updateOne({uuid}, {$set: userUp})
  }

  async delete(uuid: string): Promise<any> {
    return await UserModel.deleteOne({uuid})
  }
  
  async findAll(): Promise<any> {
    return await UserModel.find()
  }
  
}