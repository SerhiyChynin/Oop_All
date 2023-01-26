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



