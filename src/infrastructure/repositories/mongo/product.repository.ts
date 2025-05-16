import { IProductRepository } from "../../../domain/product/IProduct.repository";
import { ProductInterface } from "../../../domain/product/product.interface";
import { ProductModel } from "../../db/mongo/schema/product.schema";

export class ProductRepository implements IProductRepository {
  async create(productIn: ProductInterface): Promise<any> {
    return await ProductModel.create(productIn)
  }

  async findById(uuid: string): Promise<any> {
    return await ProductModel.findOne({uuid})
  }

  async update(uuid: string, productUp: ProductInterface): Promise<any> {
    return await ProductModel.updateOne({uuid}, {$set: productUp})
  }

  async delete(uuid: string): Promise<any> {
    return await ProductModel.deleteOne({uuid})
  }
  
  async findAll(): Promise<any> {
    return await ProductModel.find()
  }

  async updateStock(uuid: string, newStock: number): Promise<void> {
    await ProductModel.updateOne({uuid}, {$set: {stock: newStock}})
  }
  
}