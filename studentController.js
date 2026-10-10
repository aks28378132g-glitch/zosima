let students = [
    { id: 1, name: 'Ayush', course: 'B.Tech CSE' },
    { id: 2, name: 'Rahul', course: 'B.Tech AI/ML' }
];

const getStudents = (req, res) => {
    res.json(students);
};

const getStudentById = (req, res) => {
    const student = students.find(
        s => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.json(student);
};

const addStudent = (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            message: 'Name and course are required'
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
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent
};
