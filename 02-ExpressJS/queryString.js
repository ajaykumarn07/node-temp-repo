import express from "express";
const app = express();

// query string ? &
app.get("/product", (req, res) => {
  const { category, id } = req.query;
  res.send(`Product category: ${category} & Product ID: ${id}`);
});

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
