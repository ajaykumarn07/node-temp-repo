import mongoose from "mongoose";

// Define mongoose
const movieSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  ratings: { type: Number, require: true, min: 1, max: 5 },
  money: { type: mongoose.Decimal128, require: true, validate: (v) => v >= 10 },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// create a model for "movies" collection using schema
const MovieModel = mongoose.model("Movie", movieSchema);

// Insert document
const createDoc = async () => {
  try {
    // creating new documents
    const m1 = new MovieModel({
      name: "Dummy Movie",
      ratings: 1.7,
      money: 100000,
      genre: ["Cringe", "Comedy"],
      isActive: true,
      comments: [{ value: "A nkn movie." }],
    });
    const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const insertManyDocs = async () => {
  try {
    // creating new documents
    const m1 = new MovieModel({
      name: "Ondhu Sarala Prema Kathe",
      ratings: 4.7,
      money: 100000,
      genre: ["Drama", "Comedy"],
      isActive: true,
      comments: [{ value: "A good feel movie." }],
    });
    const m2 = new MovieModel({
      name: "KGF 1",
      ratings: 4.5,
      money: 90000,
      genre: ["Drama", "Action"],
      isActive: true,
      comments: [{ value: "A Excelent movie." }],
    });
    const m3 = new MovieModel({
      name: "KGF 2",
      ratings: 4.8,
      money: 110000,
      genre: ["Action", "Drama"],
      isActive: true,
      comments: [{ value: "Must watch movie from sandalwood ." }],
    });
    const m4 = new MovieModel({
      name: "Kantara",
      ratings: 4.9,
      money: 150000,
      genre: ["Drama", "Divine"],
      isActive: true,
      comments: [{ value: "Best of the decade" }],
    });
    const m5 = new MovieModel({
      name: "Kalki 2898 AD",
      ratings: 4.7,
      money: 80000,
      genre: ["Mithology", "Action"],
      isActive: true,
      comments: [{ value: "Best Movie of 2024 so for" }],
    });
    const m6 = new MovieModel({
      name: "Hanu-man",
      ratings: 4.7,
      money: 110000,
      genre: ["Drama", "Devine"],
      isActive: true,
      comments: [{ value: "Best Movie" }],
    });
    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// retrieving all the data
const allDoc = async () => {
  try {
    const result = await MovieModel.find(); // All the data
    // const result = await MovieModel.find({name:"KGF 2"}); // fetches only KGF 2 data
    // const result = await MovieModel.find().limit(2); // it will fetch only 2 data
    // const result = await MovieModel.find().skip(2); // it will skip first 2
    // const result = await MovieModel.find().countDocuments(); // display number of data
    // const result = await MovieModel.find().sort({name:-1}); // sort the name in descending order
    // const result = await MovieModel.find().sort({name:1}); // sort the name in ascending order
    // const result = await MovieModel.find({money:{$gt:60000}}); // fetches all the data that matches the operator condition
    // const result = await MovieModel.find({money:{$lt:100000}}); // fetches all the data that matches the operator condition
    // const result = await MovieModel.find({$and: [{money:100000}]}); // fetches all the data that matches the operator condition
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// retrieving single data
const singleDoc = async () => {
  try {
    // const result = await MovieModel.findById('668251d64e720fadcbb1d27c');
    const result = await MovieModel.findById(
      "668251d64e720fadcbb1d27c",
      "name"
    );
    console.clear();
    console.log(result);
    // console.log(result.name);
    // console.log(result.genre);
    // console.log(result.ratings);
  } catch (error) {
    console.log(error);
  }
};

// update by ID
const updateById = async (id) => {
  try {
    // updateOne(filter, whatToChange?)
    const result = await MovieModel.updateOne({ _id: id }, { ratings: 4.8 });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Update Many
const updateMany = async () => {
  try {
    const result = await MovieModel.updateMany(
      { ratings: 4.7 },
      { comments: [{ value: "5 Star Rating Movies" }] }
    );
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Delete a document
const deleteById = async (id) => {
  try {
    // const result = await MovieModel.findByIdAndDelete({ _id: id });
    const result = await MovieModel.deleteOne({ _id: id });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// deleteMany()
const deleteMany = async () => {
  try {
    // const result = await MovieModel.findByIdAndDelete({ _id: id });
    const result = await MovieModel.deleteMany({ ratings: 1.7 });
    console.clear();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export {
  createDoc,
  insertManyDocs,
  allDoc,
  singleDoc,
  updateById,
  updateMany,
  deleteById,
  deleteMany,
};
