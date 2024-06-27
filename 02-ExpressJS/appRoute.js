import express from "express";
const app = express();

// ugly Code

// app.get("/student", (req, res) => {
//   res.send("All Students");
// });
// app.post("/student", (req, res) => {
//   res.send("Add New Student");
// });
// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });
// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

// Refractor
app
  .route("/student")
  .get((req, res) => {
    res.send("All Students");
  })
  .post((req, res) => {
    res.send("Add New Student");
  })
  .put((req, res) => {
    res.send("Update A Student");
  })
  .delete((req, res) => {
    res.send("delete a student");
  });

app.listen(5000, () => {
  console.log(`Server is listening to port no 5000`);
});
