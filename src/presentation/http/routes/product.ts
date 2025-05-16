import { Router } from "express";
import { ProductRepository } from "../../../infrastructure/repositories/mongo/product.repository";
import { ProductUseCase } from "../../../application/product/product.useCase";
import { ProductController } from "../controllers/product.ctrl";
import { validateCreateObjectData } from "../../../infrastructure/validator/product.validator";
const route = Router()

const productRepo = new ProductRepository()
const productUseCase = new ProductUseCase(productRepo)
const productCtrl = new ProductController(productUseCase)

route.post("/", validateCreateObjectData, productCtrl.createProduct)
route.get("/:uuid", productCtrl.getProductById)
route.put("/:uuid", validateCreateObjectData, productCtrl.updateProduct)
route.delete("/:uuid", productCtrl.desactiveProduct)

route.get("/", productCtrl.listProducts)

export { route }