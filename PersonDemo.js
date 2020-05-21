const path = require("path");
const StudentDataReader = require("./StudentDataReader");

let _studentData = new StudentDataReader(path.join(__dirname, "Students.json"));

console.log(_studentData.getStudent('cc3e201c-7137-4dad-8ebe-c1e6ca638b7a'));

// let teachers = Teacher.generateRandomPeople(10);
// let students = Student.generateRandomPeople(100, teachers.map(teacher => teacher.id));

// console.log(teachers);
// console.log(students);

// console.log(teachers[0].getMyStudents(students));
// console.log(students[0].getTeacher(teachers));

// Make sure these are at the top of your file!
// const fs = require("fs");
// const path = require("path");

// fs.writeFileSync(path.join(__dirname, "Teachers.json"), JSON.stringify(teachers));
// fs.writeFileSync(path.join(__dirname, "Students.json"), JSON.stringify(students));
