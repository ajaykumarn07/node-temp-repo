import express from "express";
import { join } from "path";
import route from "./routes/route.js";
const app = express();

app.set("view engine", "ejs");
app.use("/", route);

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
