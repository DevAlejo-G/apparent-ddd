import { Request, Response } from "express";
import { OrderUseCase } from "../../../application/order/order.useCase";
import { handleErrorHttp } from "../../../infrastructure/util/error.handle";

export class OrderController {
  constructor(private orderUseCase: OrderUseCase) {
    this.createOrder = this.createOrder.bind(this);
    this.getOrderById = this.getOrderById.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.desactiveOrder = this.desactiveOrder.bind(this);
    this.listOrders = this.listOrders.bind(this);
  }

  public async createOrder({ body }: Request, res: Response) {
    try{
      const order = await this.orderUseCase.createOrder(body)
      res.send({order})
    }catch(error: any){
      if(error.name === "NOT_FOUND_USER"){
        return res.status(404).send({info: "NOT_FOUND_USER"})
      }

      if(error.name === "PRODUCT_NOT_FOUND"){
        return res.status(404).send({info: "NOT_FOUND_PRODUCT"})
      }

      if(error.name === "INSUFFICIENT_STOCK"){
        return res.send({info: "INSUFFICIENT_STOCK"})
      }
      handleErrorHttp(res, "ERROR_CREATING_ORDER")
    }
  }

  public async getOrderById({ params }: Request, res: Response) {
    try{
      const order = await this.orderUseCase.getOrderDetails(params.uuid)

      if(!order) return res.status(404).send({info: "NOT_FOUND_ORDER"});
      res.send({order})
    }catch(error){
      handleErrorHttp(res, "ERROR_")
    }
  }

  public async updateOrder(req: Request, res: Response) {
    try{

    }catch(error){
      handleErrorHttp(res, "ERROR_")
    }
  }

  public async desactiveOrder({ params }: Request, res: Response) {
    try{
      const { uuid } = params
      const order = await this.orderUseCase.getOrderDetails(uuid)

      if(!order) return res.status(404).send({info: "NOT_FOUND_ORDER"});
      
      await this.orderUseCase.deactivateOrder(uuid)
      res.send({info: "REMOVED_ORDER"})
    }catch(error){
      handleErrorHttp(res, "ERROR_")
    }
  }

  public async listOrders(req: Request, res: Response) {
    try{
      const orders = await this.orderUseCase.listOrders()
      res.send({orders})
    }catch(error){
      handleErrorHttp(res, "ERROR_")
    }
  }
}
