import { Router } from "express";
import { OrderRepository } from "../../../infrastructure/repositories/mongo/order.repository";
import { OrderUseCase } from "../../../application/order/order.useCase";
import { UserServiceAdapter } from "../../../infrastructure/repositories/mongo/adapters/UserServiceAdapter";
import { UserRepository } from "../../../infrastructure/repositories/mongo/user.repository";
import { UserService } from "../../../application/user/user.service";
import { OrderController } from "../controllers/order.ctrl";
import { validateCreateObjectData } from "../../../infrastructure/validator/order.validator";
import { ProductRepository } from "../../../infrastructure/repositories/mongo/product.repository";
import { ProductService } from "../../../application/product/product.service";
import { ProductServiceAdapter } from "../../../infrastructure/repositories/mongo/adapters/ProductServiceAdapter";
const route = Router()

const orderRepo = new OrderRepository()
const userRepo = new UserRepository()
const userService = new UserService(userRepo)
const userAdapter = new UserServiceAdapter(userService)

const productRepo = new ProductRepository()
const productService = new ProductService(productRepo)
const productAdapter = new ProductServiceAdapter(productService)

const orderUseCase = new OrderUseCase(orderRepo, userAdapter, productAdapter)
const orderCtrl = new OrderController(orderUseCase)

route.post("/", validateCreateObjectData, orderCtrl.createOrder)
route.get("/:uuid", orderCtrl.getOrderById)
route.put("/:uuid", orderCtrl.updateOrder)
route.delete("/:uuid", orderCtrl.desactiveOrder)

route.get("/", orderCtrl.listOrders)


export { route }