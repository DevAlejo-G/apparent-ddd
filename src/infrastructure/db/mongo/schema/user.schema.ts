import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    uuid: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);

export { UserModel };
