
const express = require("express");
const router = express.Router();

const studentController = require("../studentController");

// GET
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);

// POST
router.post("/", studentController.createStudent);

// PUT
router.put("/:id", studentController.replaceStudent);

// PATCH
router.patch("/:id", studentController.updateStudent);

// DELETE
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
