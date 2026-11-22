
let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Ahmed", age: 22 }
];

// Generate next ID
let nextId = Math.max(...students.map(student => student.id)) + 1;

// Find student index
const findStudentIndex = (id) => {
    return students.findIndex(student => student.id === Number(id));
};

// GET all students
const getAllStudents = () => {
    return students;
};

// GET student by ID
const getStudentById = (id) => {
    const index = findStudentIndex(id);

    return index === -1 ? null : students[index];
};

// POST - Add student
const addStudent = (data) => {
    const newStudent = {
        id: nextId++,
        name: data.name,
        age: data.age
    };

    students.push(newStudent);

    return newStudent;
};

// PUT - Replace student
const replaceStudent = (id, data) => {
    const index = findStudentIndex(id);

    if (index === -1) return null;

    students[index] = {
        id: Number(id),
        name: data.name,
        age: data.age
    };

    return students[index];
};

// PATCH - Update selected fields
const updateStudent = (id, data) => {
    const index = findStudentIndex(id);

    if (index === -1) return null;

    const allowedFields = ["name", "age"];

    allowedFields.forEach(field => {
        if (data[field] !== undefined) {
            students[index][field] = data[field];
        }
    });

    return students[index];
};

// DELETE student
const deleteStudent = (id) => {
    const index = findStudentIndex(id);

    if (index === -1) return null;

    return students.splice(index, 1)[0];
};

// Export functions
module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    replaceStudent,
    updateStudent,
    deleteStudent
};
