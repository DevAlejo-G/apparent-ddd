import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    uuid: { type: String, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model("product", ProductSchema);

export { ProductModel };
