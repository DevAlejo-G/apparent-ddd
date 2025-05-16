import { IOrderRepository } from "../../../domain/order/IOrder.repository";
import { OrderInterface } from "../../../domain/order/order.Interface";
import { OrderModel } from "../../db/mongo/schema/order.schema";

export class OrderRepository implements IOrderRepository {
  async create(orderIn: OrderInterface): Promise<any> {
    return await OrderModel.create(orderIn)
  }

  async findById(uuid: string): Promise<any> {
    return await OrderModel.findOne({uuid})
  }

  async update(uuid: string, orderUp: OrderInterface): Promise<any> {
    return await OrderModel.updateOne({uuid}, {$set: orderUp})
  }

  async remove(uuid: string): Promise<any> {
    return await OrderModel.deleteOne({uuid})
  }
  
  async findAll(): Promise<any> {
    return await OrderModel.find()
  }

}