import { UserSummary } from "../value-objects/UserSummary";

export interface IUserService {
  getUserById(uuid: string): Promise<UserSummary>
}