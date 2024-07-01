import express from "express";
import connectDB from "./db/connectDB.js";
import {
  createDoc,
  insertManyDocs,
  allDoc,
  singleDoc,
  updateById,
  updateMany,
  deleteById,
  deleteMany,
} from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABASE_URL);

// insert one document
// createDoc();

// Insert Many
// insertManyDocs();

// Retriev all the details
// allDoc();

// Retrieving single detai
// singleDoc();

// Update record
// updateById("668251d64e720fadcbb1d282");

// UpdateMany() documents at once
// updateMany();

// Delete document
// deleteById("66825bc5fcea700d8c58e8bb");

// deleteMany() document at once
deleteMany();

app.listen(port, () => {
  console.log(`server listening on port np ${port}`);
});
