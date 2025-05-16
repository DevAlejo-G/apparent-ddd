import { IUserRepository } from "../../domain/user/IUser.repository";
import { UserSummaryDto, UserSummaryMapper } from "./mappers/userSummaryMapper";

export class UserService {
  constructor(private readonly userRepo: IUserRepository) {}

  async getUserSummary(uuid: string): Promise<UserSummaryDto> {
    const user = await this.userRepo.findById(uuid)
    if (!user) {
      const error = new Error(`User with uuid ${uuid} not found`);
      error.name = "NOT_FOUND_USER"
      throw error
    }

  return UserSummaryMapper.map(user);
  }
}
