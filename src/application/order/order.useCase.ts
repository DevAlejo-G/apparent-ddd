import { IOrderRepository } from "../../domain/order/IOrder.repository";
import { OrderEntity } from "../../domain/order/order.entity";
import { OrderInterface } from "../../domain/order/order.Interface";
import { IProductService } from "../../domain/order/ports/IProduct.service";
import { IUserService } from "../../domain/order/ports/IUser.Service";

export class OrderUseCase {
  constructor(
    private readonly orderRepository: IOrderRepository,
    private readonly userService: IUserService,
    private readonly productService: IProductService
  ) {}

  public createOrder = async ({uuid_user, products}: OrderInterface) => {
    const user = await this.userService.getUserById(uuid_user)
    
    let totalAccount = 0
    const validatedProducts = []

    for(const { product_id, quantity } of products) {
      await this.productService.checkAndUppdateStock(product_id, quantity)
      
      const product = await this.productService.getProductDetails(product_id)
      const subtotal = product?.price * quantity
      totalAccount += subtotal

      validatedProducts.push({product_id, quantity, total: product.price*quantity})
    }

    const orderEntity = new OrderEntity(user.uuid, validatedProducts)
    const orderCreated = await this.orderRepository.create(orderEntity)
    return orderCreated
  }

  public getOrderDetails = async (uuid: string) => {
    return await this.orderRepository.findById(uuid)
  }

  public updateUser = async (uuid: string) => {

  }

  public deactivateOrder = async (uuid: string) => {
    return await this.orderRepository.remove(uuid)
  }

  public listOrders = async () => {
    return await this.orderRepository.findAll()
  }
}