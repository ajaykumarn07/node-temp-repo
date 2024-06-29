import express from "express";
// import { join } from "path";
import route from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.set("view engine", "ejs");
app.use("/", route);
app.use(bodyParser.json());

app.post("/post", (req, res) => {
  const { name, youtube, age } = req.body;
  res.send(`${name} ${youtube} ${age}`);
});

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
