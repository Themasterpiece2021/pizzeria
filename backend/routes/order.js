import express from "express";
import order from "../controllers/order.js";

const router = express.Router();
router.post("/registerOrder", order.registerOrder);
router.get("/listOrder", order.listOrder);
router.put("/updateOrder", order.updateOrder);
router.delete("/deleteOrder", order.deleteOrder);
export default router;