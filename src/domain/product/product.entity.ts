import { ProductInterface } from "./product.interface";
import { v4 as Uuid } from "uuid";

export class ProductEntity implements ProductInterface {
  uuid: string;
  name: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.uuid = Uuid();
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}
