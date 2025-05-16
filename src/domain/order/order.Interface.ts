export interface OrderInterface {
  uuid: string;
  uuid_user: string;
  products: Array<{ product_id: string; quantity: number;}>;
  total: number;
}