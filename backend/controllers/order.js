import order from "../models/order.js";
import user from "../models/user.js";

const registerOrder = async (req, res) => {
  if (!req.body.userId || !req.body.pizzaId)
    return res.status(400).send({ message: "Incomplete data" });

  const existingUser = await user.findById({ _id: req.body.userId });

  if (!existingUser) return res.status(400).send({ message: "invalid user" });

  const orderSchema = new order({
    userId: req.user._id,
    pizzaId: req.body.pizzaId,
  });
  const result = orderSchema.save();
  return !result
    ? res.status(400).send({ message: "Error registering order" })
    : res.status(200).send({ result });
};

const listOrder = async (req, res) => {
  const orderList = await order.find();
  return orderList.length == 0
    ? res.status(400).send({ message: "Empty orders list" })
    : res.status(200).send({ orderList });
};

const updateOrder = async (req, res) => {
  if (!req.body._id || !req.body.pizzaId)
    return res.status(400).send({ message: "Incomplete data" });

    const orderUpdate = await role.findByIdAndUpdate(req.body._id, {
        pizzaId: req.body.pizzaId,
      });

      return !orderUpdate
    ? res.status(400).send({ message: "Error editing Order" })
    : res.status(200).send({ message: "Order updated" });
};
const deleteOrder = async (req, res) => {
    const orderDelete = await board.findByIdAndDelete(req.params._id);
    return !orderDelete
      ? res.status(400).send({ message: "Order not found" })
      : res.status(200).send({ message: "Order deleted" });
  };

export default { registerOrder, listOrder, updateOrder, deleteOrder};
