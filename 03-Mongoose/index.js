import express from "express";
import connectDB from "./db/connectDB.js";
import { insertManyDocs } from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

insertManyDocs();

app.listen(port, () => {
  console.log(`server listening on port np ${port}`);
});
