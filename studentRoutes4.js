
const express = require("express");
const router = express.Router();

let students = [
    { id: 1, name: "Rahul", course: "BTech" },
    { id: 2, name: "Priya", course: "BCA" }
];

router.get("/", (req, res) => {
    res.status(200).json(students);
});

router.post("/", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            error: "Name and course are required"
        });
    }

    const newStudent = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name,
        course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            error: "Student not found"
        });
    }

    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            error: "Name and course are required"
        });
    }

    student.name = name;
    student.course = course;

    res.status(200).json(student);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1)[0];
    res.status(200).json(deletedStudent);
});

module.exports = router;
