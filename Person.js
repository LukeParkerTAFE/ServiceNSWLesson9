const uuid = require("uuid");
const getRandomGivenName = function () {
    const RANDOM_FIRST_NAMES = ["Charlotte", "Olivia", "Ava", "Amelia", "Mia", "Isla", "Oliver", "William", "Jack", "Noah", "Thomas", "James"];
    return RANDOM_FIRST_NAMES[Math.floor(Math.random() * RANDOM_FIRST_NAMES.length)];
}

const getRandomFamilyName = function () {
    const RANDOM_LAST_NAMES = ["Smith", "Jones", "Williams", "Brown", "Wilson", "Johnson", "Taylor", "White", "Martin", "Anderson", "Thompson", "Nguyen"];
    return RANDOM_LAST_NAMES[Math.floor(Math.random() * RANDOM_LAST_NAMES.length)];
}

const getRandomNumber = max => Math.floor(Math.random() * max);

class Person {
    constructor(firstName, lastName, age, id = uuid.v4()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(
                getRandomGivenName(),
                getRandomFamilyName(),
                getRandomNumber(42) + 18
            );
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}



class Student extends Person {
    constructor(firstName, lastName, age, grades, teacherId, id = uuid.v4()) {
        super(firstName, lastName, age, id);
        this.teacherId = teacherId;
        this.grades = grades;
    }

    getTeacher(teachers) {
        return teachers.find(teacher => teacher.id == this.teacherId);
    }

    static generateRandomPeople(num, validIds) {
        return super.generateRandomPeople(num).map(person => new Student(
            person.firstName,
            person.lastName,
            person.age,
            this.generateRandomGrades(),
            validIds[getRandomNumber(validIds.length)],
            person.id
        ));
    }

    static generateRandomGrades () {
        let numberOfGrades = getRandomNumber(10);
        let grades = [];
        for (let i = 0; i < numberOfGrades; i++) {
            grades.push(getRandomNumber(100));
        }
        return grades;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, id = uuid.v4()) {
        super(firstName, lastName, age, id);
    }

    static generateRandomPeople(num) {
        // let people =  super.generateRandomPeople(num);
        // let teachers = []
        // for (let i = 0; i < people.length; i++) {
        //     const person = people[i];
        //     teachers.push(new Teacher(
        //         person.firstName,
        //         person.lastName,
        //         person.age,
        //         person.id
        //     ));
        // }

        return super.generateRandomPeople(num).map(person => new Teacher(
            person.firstName,
            person.lastName,
            person.age,
            person.id
        ));
    }

    getMyStudents(students) {
        return students.filter(student => student.teacherId == this.id);
    }
}

let teachers = Teacher.generateRandomPeople(2);
let students = Student.generateRandomPeople(5, teachers.map(teacher => teacher.id));
console.log (teachers);
console.log (students);

console.log(teachers[0].getMyStudents(students));
console.log(students[0].getTeacher(teachers));