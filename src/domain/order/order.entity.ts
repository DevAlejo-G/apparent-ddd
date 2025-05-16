
import { v4 as Uuid } from "uuid"
import { OrderInterface } from "./order.Interface";

export class OrderEntity implements OrderInterface {
  uuid: string;
  uuid_user: string;
  products: { product_id: string; quantity: number; }[];
  total: number;

  constructor(uuid_user: string, products: { product_id: string; quantity: number; }[]) {
    this.uuid = Uuid()
    this.uuid_user = uuid_user
    this.products = products
    this.total = 0
  }
}