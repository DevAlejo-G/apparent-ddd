import { Request, Response } from "express";
import { ProductUseCase } from "../../../application/product/product.useCase";
import { handleErrorHttp } from "../../../infrastructure/util/error.handle";

export class ProductController {
  constructor(private productUseCase: ProductUseCase) {
    this.createProduct = this.createProduct.bind(this)
    this.getProductById = this.getProductById.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.desactiveProduct = this.desactiveProduct.bind(this)
    this.listProducts = this.listProducts.bind(this)
  }

  public async createProduct({ body }: Request, res: Response) {
    try{
      const product = await this.productUseCase.registerProduct(body)
      res.send({product})
    }catch(error){
      handleErrorHttp(res, "ERROR_CREATING_PRODUCT")
    }
  }

  public async getProductById({ params }: Request, res: Response) {
    try{
      const product = await this.productUseCase.getProductDetails(params.uuid)

      if(!product) return res.status(404).send({info: "NOT_FOUND_PRODUCT"})
      res.send({product})
    }catch(error){
      handleErrorHttp(res, "ERROR_READING_PRODUCT")
    }
  }

  public async updateProduct(req: Request, res: Response) {
    try{
      const { uuid } = req.params
      const product = await this.productUseCase.getProductDetails(uuid)

      if(!product) return res.status(404).send({info: "NOT_FOUND_PRODUCT"});

      await this.productUseCase.updateProduct(uuid, req.body) 
      res.send({info: "MODIFIED_PRODUCT"})
    }catch(error){
      handleErrorHttp(res, "ERROR_UPDATING_PRODUCT")
    }
  }

  public async desactiveProduct({ params }: Request, res: Response) {
    try{
      const { uuid } = params
      const product = await this.productUseCase.getProductDetails(uuid)

      if(!product) return res.status(404).send({info: "NOT_FOUND_PRODUCT"});

      await this.productUseCase.deactivateProduct(uuid)
      res.send({info: "REMOVED_PRODUCT"})
    }catch(error){
      handleErrorHttp(res, "ERROR_DELETING_PRODUCT")
    }
  }

  public async listProducts(req: Request, res: Response) {
    try{
      const products = await this.productUseCase.listProducts()
      res.send({products})  
    }catch(error){
      handleErrorHttp(res, "ERROR_FETCHING_PRODUCTS")
    }
  }
}