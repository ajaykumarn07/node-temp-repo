import express from "express";
import students from "../routes/studentsForController.js";

const app = express();

app.use("/students", students);

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
