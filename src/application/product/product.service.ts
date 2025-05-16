import { IProductRepository } from "../../domain/product/IProduct.repository";

export class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async checkAndUppdateStock(product_id: string, quantity: number): Promise<void> {
    const product = await this.productRepository.findById(product_id)

    if(!product) {
      const error = new Error("PRODUCT_NOT_FOUND")
      error.name = "PRODUCT_NOT_FOUND"
      throw error
    }

    if(product.stock < quantity) {
      const error = new Error("INSUFFICIENT_STOCK")
      error.name = "INSUFFICIENT_STOCK"
      throw error;
    }

    const newStock = product.stock - quantity
    await this.productRepository.updateStock(product_id, newStock)
  }

  async getProductDetails(uuid: string) {
    return await this.productRepository.findById(uuid);
  }

}