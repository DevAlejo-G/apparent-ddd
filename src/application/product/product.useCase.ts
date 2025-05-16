import { IProductRepository } from "../../domain/product/IProduct.repository";
import { ProductEntity } from "../../domain/product/product.entity";
import { ProductInterface } from "../../domain/product/product.interface";

export class ProductUseCase {
  constructor(private readonly productRepository: IProductRepository) { }

  public registerProduct = async ({name, price, stock}: ProductInterface) => {
    const productEntity = new ProductEntity(name, price, stock)
    return await this.productRepository.create(productEntity)
  }

  public getProductDetails = async (uuid: string) => {
    return await this.productRepository.findById(uuid)
  }

  public updateProduct = async (uuid: string, { name, price, stock }: ProductInterface) => {
    const productEntity = new ProductEntity(name, price, stock)
    return await this.productRepository.update(uuid, productEntity)
  }

  public deactivateProduct = async (uuid: string) => {
    return await this.productRepository.delete(uuid)
  }

  public listProducts = async () => {
    return await this.productRepository.findAll()
  }
}