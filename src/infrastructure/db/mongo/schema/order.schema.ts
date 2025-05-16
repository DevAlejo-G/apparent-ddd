import { Schema, model } from "mongoose"

const OrderSchema = new Schema(
  {
    uuid: { type: String, unique: true},
    uuid_user: { type: String, required: true},
    products: [
      {
        product_id: { type: String, require: true},
        quantity: { type: Number, require: true},
        total: { type: Number, default: 0}
      }
    ],
    total: {type: Number, default: 0} 
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const OrderModel = model("orders", OrderSchema)

export { OrderModel }