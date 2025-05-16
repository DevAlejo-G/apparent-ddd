import { Request, Response } from "express";
import { UserUseCase } from "../../../application/user/user.useCase";
import { handleErrorHttp } from "../../../infrastructure/util/error.handle";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.createUser = this.createUser.bind(this)
    this.getUserById = this.getUserById.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.desactivateUser = this.desactivateUser.bind(this)
    this.listUsers = this.listUsers.bind(this)
  }

  public async createUser({ body }: Request, res: Response) {
    try{
      const user = await this.userUseCase.registerUser(body)
      res.send({user})
    }catch(error){
      handleErrorHttp(res, "ERROR_CREATING_USER")
    }
  }

  public async getUserById({ params }: Request, res: Response) {
    try{
      const { uuid } = params
      const user = await this.userUseCase.getUserDetails(uuid)

      if(!user) return res.status(404).send({info: "NOT_FOUND_USER"});
      res.send({user})
    }catch(error){
      handleErrorHttp(res, "ERROR_READING_USER")
    }
  }

  public async updateUser(req: Request, res: Response) {
    try{
      const { uuid } = req.params
      const user = await this.userUseCase.getUserDetails(uuid)

      if(!user) return res.status(404).send({info: "NOT_FOUND_USER"});

      await this.userUseCase.updateUser(uuid, req.body)
      res.send({info: "MODIFIED_USER"})
    }catch(error){
      handleErrorHttp(res, "ERROR_UPDATING_USER")
    }
  }

  public async desactivateUser({ params }: Request, res: Response) {
    try{
      const { uuid } = params
      const user = await this.userUseCase.getUserDetails(uuid)

      if(!user) return res.status(404).send({info: "NOT_FOUND_USER"});

      await this.userUseCase.deactivateUser(uuid)
      res.send({info: "REMOVED_USER"})
    }catch(error){
      handleErrorHttp(res, "ERROR_DELETING_USER")
    }
  }

  public async listUsers(req: Request, res: Response) {
    try{
      const users = await this.userUseCase.listUsers()
      res.send({users})
    }catch(error){
      handleErrorHttp(res, "ERROR_FETCHING_USERS")
    }
  }
}