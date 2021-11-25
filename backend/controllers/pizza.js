import pizza from "../models/pizza.js";

const savePizza = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  const pizzaSchema = new pizza({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    pizzaStatus: "to-do",
    imageUrl: "NoImage",
  });

  const result = await pizzaSchema.save();
  return !result
    ? res.status(400).send({ message: "Error registering pizza" })
    : res.status(200).send({ result });
};

const listPizza = async (req, res) => {
  const pizzaList = await board.find({ userId: req.user._id });
  return pizzaList.length === 0
    ? res.status(400).send({ message: "You have no assigned pizza" })
    : res.status(200).send({ pizzaList });
};

const updatePizza = async (req, res) => {
  if (!req.body._id || !req.body.pizzaStatus)
    return res.status(400).send({ message: "Incomplete data" });

  const pizzaUpdate = await pizza.findByIdAndUpdate(req.body._id, {
    pizzaStatus: req.body.pizzaStatus,
  });

  return !pizzaUpdate
    ? res.status(400).send({ message: "Pizza not found" })
    : res.status(200).send({ message: "Pizza updated" });
};

const findPizza = async (req, res) => {
  const pizzaId = await pizza.findById({ _id: req.params["_id"] });
  return !pizzaId
    ? res.status(400).send({ message: "No search results" })
    : res.status(200).send({ pizzaId });
};

const deletePizza = async (req, res) => {
  const pizzaDelete = await pizza.findByIdAndDelete(req.params._id);
  return !pizzaDelete
    ? res.status(400).send({ message: "Pizza not found" })
    : res.status(200).send({ message: "Pizza deleted" });
};

export default {
  savePizza,
  listPizza,
  updatePizza,
  findPizza,
  deletePizza,
};
