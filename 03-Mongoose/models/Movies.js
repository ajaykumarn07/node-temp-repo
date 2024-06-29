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
// const createDoc = async () => {
//   try {
//     // creating new documents
//     const m1 = new MovieModel({
//       name: "Ondhu Sarala Prema Kathe",
//       ratings: 4.7,
//       money: 100000,
//       genre: ["Drama", "Comedy"],
//       isActive: true,
//       comments: [{ value: "A good feel movie." }],
//     });
//     const result = await m1.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

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

export { insertManyDocs };
