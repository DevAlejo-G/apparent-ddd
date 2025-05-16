import { Router } from "express";
import { UserRepository } from "../../../infrastructure/repositories/mongo/user.repository";
import { UserUseCase } from "../../../application/user/user.useCase";
import { UserController } from "../controllers/user.ctrl";
import { validateCreateObjectData } from "../../../infrastructure/validator/user.validator";
const route = Router()

const userRepo = new UserRepository()
const userUseCase = new UserUseCase(userRepo)
const userCtrl = new UserController(userUseCase)

route.post("/", validateCreateObjectData, userCtrl.createUser)
route.get("/:uuid", userCtrl.getUserById)
route.put("/:uuid", validateCreateObjectData, userCtrl.updateUser)
route.delete("/:uuid", userCtrl.desactivateUser)

route.get("/", userCtrl.listUsers)

export { route }