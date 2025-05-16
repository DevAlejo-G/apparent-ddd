import { UserEntity } from "../../../domain/user/user.entity";

export class UserSummaryDto {
  constructor(
    public readonly uuid: string,
    public readonly name: string
  ) {}
}

export class UserSummaryMapper {
  static map(user: UserEntity): UserSummaryDto {
    return new UserSummaryDto(user.uuid, user.name);
  }
}
