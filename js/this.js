// This
// arrow function -> this -> window

console.log(this); //window

document.querySelector('.b_1').onclick = function () {
    console.log(this);
    this.style.background = 'greenyellow';
}
document.querySelector('.b_2').addEventListener('click', g1);

function g1() {
    console.log(this);
    this.style.background = 'greenyellow';  
}

let d = document.querySelectorAll('.out');

for (let i = 0; i < d.length; i++){
    d[i].onclick = g1;
}

class U2 {
    constructor(model) {
        this.model = model;
    }
    showThis() {
        console.log(this);
    }
}

const boat = new U2('744');
const boat2 = new U2('232');
console.log(boat);
console.log(boat2);
boat.showThis();
boat2.showThis();

class YellowSubmarine extends U2{
    constructor(model, color) {
        super(model);
        this.color = color;
    console.log('----------');
    console.log(this.model);

    }
}

const col = new YellowSubmarine('222', 'blue');
console.log(col);
console.log(col.model);



document.querySelector('.b_3').onclick = () => {
    function r1() {
        console.log('----' + this);
        return this
    }
    r1();
}


// Apply call bind

let b4 = document.querySelector('.b_4');
let b3 = document.querySelector('.b_3');
let b1 = document.querySelector('.b_1');
let b5 = document.querySelector('.b_5');
let b6 = document.querySelector('.b_6');
let b7 = document.querySelector('.b_7');
let b8 = document.querySelector('.b_8');
let out_1 = document.querySelector('.out_1');
let out_8 = document.querySelector('.out_8');
// b4.onclick = test;

function test(color, num) {
    this.style.background = 'grey';
    out_2.innerHTML = num;
    out_2.style.color = 'white';
    out_2.style.background = color;
}
function test2(color, num) {
    this.style.background = color;
    out_1.style.color = 'white';
    out_1.style.background = color;
    out_1.style.textAlign = 'center';
    out_1.style.justifyContent = 'center';
    out_1.style.fontSize = 24 + 'px';

    console.log(num);
    out_1.innerHTML = num;
}
// test(); //Error - this не на что ссылатся, смотрит в виндов

// Call - вызывает функию с тыканием ее в контекст, что будет внутри this лежать
//function.call(контекст, аргументы1, 2...[1,2,3]) Первый параметр это что будет в this, дальше аргументы. Если []  то єти параметрі не являються обязательніми

// test.call(b4); // вызвал функцию и указал что this -> b4;
// b5.onclick = function () {
//     test.call(b6)
//     test2.call(b4, 'yellow', 222)
//     test2.call(out_1, 'yellow', 222)
// };

// b6.onclick = function () {
//     test.apply(b5, ['yellow', 333])  //call аргументы передаем списком, apply аргументы передаем в виде массива
//                                      // минус в том что функция выполняеться сразу на момент запуска функции
// };

// // bind
let out_2 = document.querySelector('.out_2');
let out_3 = document.querySelector('.out_3');
let out_7 = document.querySelector('.out_7');
let out_4 = document.querySelector('.out_4');


let blueColor = test2.bind(b5, 'blue', '777 Blue!')
let pinkColor = test2.bind(b6, 'pink', '888 Pink!');
let ttt = test.bind(out_4, 'grey', '999 Grey!');

b5.onclick = blueColor;
b6.onclick = pinkColor;
b4.onclick = ttt;

function colorise(color, text) {
    out_3.innerHTML = text;
    this.style.background = 'green';
    out_3.style.color = 'white';
    out_3.style.background = color;
}

let action = colorise.bind(b1, 'green', 'Hello BABY!!!');
b1.onclick = action;

let action2 = colorise.bind(out_7, 'red', 'HAHAHA');
b7.onclick = action2;
let action3 = colorise.bind(out_8, 'red', 'YOYOYO222');
b8.onclick = action3;




