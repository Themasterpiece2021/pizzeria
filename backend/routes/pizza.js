import express from "express";
import pizza from "../controllers/pizza.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/savePizza", auth, pizza.savePizza);
router.get("/listPizza", auth, pizza.listPizza);
router.get("/findPizza/:_id", auth, pizza.findPizza);
router.put("/updatePizza", auth, pizza.updatePizza);
router.delete("/deletePizza/:_id", auth, pizza.deletePizza);

export default router;