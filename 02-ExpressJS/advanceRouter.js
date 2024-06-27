import express from "express";

// Create routes folder and put your routes in a seperate folder
// create a instance of exress.Router()
// instead of app.method change that to "router.method"
// export router
// import router
// use (app.use) buillt in middleware & provide your routes

import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

const app = express();

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
