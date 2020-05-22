const Student = require("./Student");
const fs = require("fs");

module.exports = class StudentDataReader {
    constructor(fileName) {
        this.fileName = fileName;
    }

    getArrayFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString()).map(studentRaw => new Student (
            studentRaw.firstName,
            studentRaw.lastName,
            studentRaw.age,
            studentRaw.grades,
            studentRaw.teacherId,
            studentRaw.id
        ));
    }

    saveArrayToFile(value) {
        fs.writeFileSync(this.fileName, JSON.stringify(value));
    }

    getStudent(id) {
        return this.getArrayFromFile().find(s => s.id == id);
    }

    updateStudent(student) {
        this.saveArrayToFile(this.getArrayFromFile().map(s => {
            if (s.id == student.id) {
                return student;
            } else {
                return s;
            }
        }));
    }

    deleteStudent(id) {
        this.saveArrayToFile(this.getArrayFromFile().filter(s => s.id != id));
    }

    addStudent(student) {
        this.saveArrayToFile(this.getArrayFromFile().concat([student]));
    }
}
