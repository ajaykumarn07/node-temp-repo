import express from "express";
import userCredentials from "./logsMiddleware.js";

const app = express();
// middleware
app.use(userCredentials);

// userRequest
app.get("/", (req, res) => {
  res.send("<h1>Hello Sisya's</h1>");
});

// userRequest
// app.get("/", userCredentials, (req, res) => {
//   res.send("<h1>Hello Sisya's</h1>");
// });

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
