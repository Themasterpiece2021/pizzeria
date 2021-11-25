import express, { application } from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";

import pizza from "./routes/pizza.js";

import role from  "./routes/role.js";
import user from  "./routes/user.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/pizza", pizza);

app.use("/api/role",role);
app.use("/api/user",user);


app.listen(process.env.PORT, () => {
  console.log("Server Running on port " + process.env.PORT);
});

db.dbConnection();
