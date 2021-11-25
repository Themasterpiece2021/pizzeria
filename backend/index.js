import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import order from "./routes/order.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/order", order);

app.listen(process.env.PORT, () => {
  console.log("Server Running on port " + process.env.PORT);
});

db.dbConnection();
