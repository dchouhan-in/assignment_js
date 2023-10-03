let person = {
    name: null,
    age: null,
    eval: function () { },
    profession: null
}

let teacher = {
    __proto__: person,
    profession: "teacher",
    subject: null,
    eval: function () {
        console.log(`teacher: ${this.name}, subject: ${this.subject}`);
    },
    createTeacher: function (name, age, subject) {
        this.name = name,
            this.age = age,
            this.subject = subject

        return this
    }
}


let student = {
    __proto__: person,
    profession: "student",
    grades: null,
    eval: function () {
        console.log(`student: ${this.name}, grades: ${this.grades}`);
    },
    createStudent: function (name, age, grades) {
        this.name = name,
            this.age = age,
            this.grades = grades

        return this
    }
}

function getTeacher(name, age, subject) {
    const _teacher = Object.create(teacher)
    return _teacher.createTeacher(name, age, subject)
}

function getStudent(name, age, grades) {
    const _student = Object.create(student)
    return _student.createStudent(name, age, grades)
}


teacher1 = getTeacher("a teacher ", 12, "maths")
teacher2 = getTeacher("b teacher", 22, "science")
student1 = getStudent("a teacher", 12, 30)
student2 = getStudent("b teacher", 22, 50)


teacher1.eval()
teacher2.eval()
student1.eval()
student2.eval()


Object.seal(teacher1)

