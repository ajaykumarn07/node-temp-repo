import express from "express";

const allStudents = (req, res) => {
  res.send("All Students");
};
const newStudent = (req, res) => {
  res.send("Create New Student");
};
const updateStudent = (req, res) => {
  res.send("Update New Students");
};
const deleteStudents = (req, res) => {
  res.send("Delete Students");
};

export { allStudents, newStudent, updateStudent, deleteStudents };
