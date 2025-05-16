import { ProductService } from "../../../../application/product/product.service";
import { IProductService } from "../../../../domain/order/ports/IProduct.service";

export class ProductServiceAdapter implements IProductService {
  constructor(private readonly productService: ProductService) {}

  async checkAndUppdateStock(product_id: string, quantity: number): Promise<void> {
    return this.productService.checkAndUppdateStock(product_id, quantity)
  }

  async getProductDetails(uuid: string): Promise<any> {
    return await this.productService.getProductDetails(uuid)
  }

}