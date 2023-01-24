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



// Home Work


let w = 100 + "px";
let h = 100 + "px";
let back = 'orange';
let v = 'hello baby'
class Button {
    constructor(width, height, background, value){
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }
    render() {           
            let bb = document.createElement('button');
            bb.innerHTML = 'Hello Baby'
            document.querySelector('.out_1').appendChild(bb);
        return btn.bb;
    }
}
const btn = new Button(w,h,back,v)
document.querySelector('.out_1').innerHTML = btn.value;

        
