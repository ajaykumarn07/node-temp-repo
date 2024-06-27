import express from "express";

const router = express.Router();

router.get("/all", (req, res) => {
  res.send("All Students");
});
router.post("/create", (req, res) => {
  res.send("Add New Student");
});
router.put("/update", (req, res) => {
  res.send("Update Student ID");
});
router.delete("/delete", (req, res) => {
  res.send("Delete Student from DB");
});

export default router;
