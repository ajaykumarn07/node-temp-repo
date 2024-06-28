import express from "express";
import {
  allStudents,
  deleteStudents,
  newStudent,
  updateStudent,
} from "../controllers/student.js";

const router = express.Router();

router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudents);

export default router;
