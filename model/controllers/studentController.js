
const Student = require("../studentModel");

// GET all students
function getStudents(req, res) {
    res.json(Student.getAllStudents());
}

// GET single student
const getStudent = (req, res) => {
    const student = Student.getStudentById(req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

// POST
const createStudent = (req, res) => {
    const student = Student.addStudent(req.body);

    res.status(201).json(student);
};

// PUT
const replaceStudent = (req, res) => {
    const student = Student.replaceStudent(req.params.id, req.body);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

// PATCH
const updateStudent = (req, res) => {
    const student = Student.updateStudent(req.params.id, req.body);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

// DELETE
const deleteStudent = (req, res) => {
    const student = Student.deleteStudent(req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted", data: student });
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    replaceStudent,
    updateStudent,
    deleteStudent
};
