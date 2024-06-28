import express from "express";

const app = express();

// Route Params
// ecom/products/iphone/:iphone
// app.get("/ecom/products/iphone/:model", (req, res) => {
//   const { model } = req.params;
//   res.send(`Iphone ${model} Pro Max`);
//   //   res.send("Student Deleted!!");
// });

app.get("/products/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product Category (${category}) And Product ID (${id})`);
  //   res.send("Student Deleted!!");
});

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

app.get("/user/:id", (req, res) => {
  console.log(`this is user id path`);
  res.send("response OK!!");
});

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
