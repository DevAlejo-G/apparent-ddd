import { UserEntity } from "../../domain/user/user.entity";
import { UserInterface } from "../../domain/user/user.interface";
import { IUserRepository } from "../../domain/user/IUser.repository";
import { encryptPass } from "../../infrastructure/util/bcrypt.handle";

export class UserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  public registerUser = async ({ name, email, password }: UserInterface) => {
  const passHash = await encryptPass(password)
  const userEntity = new UserEntity(name, email, passHash);
  return await this.userRepository.create(userEntity)
};

  public getUserDetails = async (uuid: string) => {
    return await this.userRepository.findById(uuid)
  }

  public updateUser = async (uuid: string, { name, email, password }: UserInterface) => {
    const userEntity = new UserEntity(name, email, password);
    return await this.userRepository.update(uuid, userEntity)
  }

  public deactivateUser = async (uuid: string) => {
    return  await this.userRepository.delete(uuid)
  }

  public listUsers = async () => {
    return await this.userRepository.findAll()
  }
}