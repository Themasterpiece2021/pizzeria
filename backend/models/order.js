import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "users" },
  pizzaId: { type: mongoose.Schema.ObjectId, ref: "pizzas" },
  registerDate: { type: Date, default: Date.now },
});

const order = mongoose.model("orders", orderSchema);
export default order;
