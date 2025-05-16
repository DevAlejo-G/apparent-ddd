import { ProductInterface } from "./product.interface";

export interface IProductRepository {
  create(productIn: ProductInterface): Promise<ProductInterface | null>
  findById(uuid: string): Promise<ProductInterface | null>
  update(uuid: string, productUp: ProductInterface): Promise<ProductInterface | null>
  delete(uuid: string): Promise<ProductInterface | null>
  updateStock(uuid: string, newStock: number): Promise<void>
  findAll(): Promise<ProductInterface[] | null>
}