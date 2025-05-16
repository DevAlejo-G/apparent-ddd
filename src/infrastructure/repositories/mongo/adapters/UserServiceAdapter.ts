import { UserService } from "../../../../application/user/user.service"
import { IUserService } from "../../../../domain/order/ports/IUser.Service"
import { UserSummary } from "../../../../domain/order/value-objects/UserSummary"

export class UserServiceAdapter implements IUserService {
  constructor(private readonly userService: UserService) {}

  async getUserById(uuid: string): Promise<UserSummary> {
    const userSummaryDto = await this.userService.getUserSummary(uuid)
    return new UserSummary(userSummaryDto.uuid, userSummaryDto.name)
  }
}