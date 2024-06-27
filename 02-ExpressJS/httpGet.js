// create folder
// npm init -y
// npm i express
// create instance express
// provide port number
// Basic route /

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Happy express Learning");
});

// app.get("/about", (req, res) => {
//   res.send("<h1>About</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Page</h1>");
// });

// string pattern
app.get("/ab?cd", (req, res) => {
  res.send("<h4>if the user hits (acd) or (abcd) then it will runPage</h4>");
});

// Regex
app.get(/x/, (req, res) => {
  res.send("<h1>if the path include letter (x) it will works</h1>");
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("<h1>REGEX Its working</h1>");
});

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
