import { ProductInterface } from "../../product/product.interface"

export interface IProductService {
  checkAndUppdateStock(product_id: string, quantity: number): Promise<void>
  getProductDetails(uuid: string): Promise<ProductInterface>
  
}