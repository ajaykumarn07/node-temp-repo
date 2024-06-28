import express from "express";
import { products } from "./data.js";
const app = express();

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
