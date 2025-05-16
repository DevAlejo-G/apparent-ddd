import { OrderInterface } from "./order.Interface"

export interface IOrderRepository {
  create(orderIn: OrderInterface): Promise<OrderInterface | null>
  findById(uuid: string): Promise<OrderInterface | null>
  update(uuid: string, orderUp: OrderInterface): Promise<OrderInterface | null>
  remove(uuid: string): Promise<OrderInterface | null>
  findAll(): Promise<OrderInterface[] | null>
}