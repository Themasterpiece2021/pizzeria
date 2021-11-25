import express, { application } from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
<<<<<<< HEAD
import order from "./routes/order.js";
=======

import pizza from "./routes/pizza.js";

import role from  "./routes/role.js";
import user from  "./routes/user.js";


>>>>>>> cd91c0486cad6785d9c6f89bb3593efd8bb33797
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/order", order);

app.use("/api/pizza", pizza);

app.use("/api/role",role);
app.use("/api/user",user);


app.listen(process.env.PORT, () => {
  console.log("Server Running on port " + process.env.PORT);
});

db.dbConnection();
