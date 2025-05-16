import { UserSummaryDto } from "../../../application/user/mappers/userSummaryMapper";

export interface IUserSummaryService {
  getUserSummary(uuid: string): Promise<UserSummaryDto>;
}
