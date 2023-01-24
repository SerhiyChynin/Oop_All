// class -> function
// abstract class -> class -> object



let a = 'Serhii';
let b = '22222261';

const person = new User(a, b);
console.log(person);
console.log(person.validatePassword());

let firstStudent = new Student(a, b, 'PapaJohn');
console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());