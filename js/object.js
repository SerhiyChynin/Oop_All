
// Прототипю Можем указать прототип обьекта, прототипное програмирование. В Новом обьекте унаследуем через прототип свойства пред обьекта и можем ими пользоваться
let a = {
    "text": 'Hello Baby',
    "color": 'green',
    "bold": true,
    "show": function () {
        console.log(this.color);
    }
}

let b = {
    // "text": 'Hello Baby',
    // "color": 'green',    чтобы не писать повторно пишем __proto__: a, прототип обьекта а
    "fontSize": '24 px',
    __proto__: a
}

// console.log(a);
// console.log(b);
// b.text = 'one';
// console.log(b.text);
// console.log(a.text);
//Расширили класс b за счет класса a.

b.color = 'red';
a.show();
b.show();

let c = {
    "fontFamily": 'Verdana',
    __proto__: b
}
console.log(c.bold);
console.log(c);
// a -> b -> c

console.log(c.hasOwnProperty("bold"));

//Home Work

let cpu = {
    "producer": 'AMD',
    "amount": 250.00,
    "family": 'AMD Ryzen 7',
    "name": 'AMD Ryzen 7 3700X',
    "image": 'img_OKEY'
}

let memory = {
    __proto__: cpu,
    
    "producer": 'Hynix',
    "amount": 60,
    "memory": 2048,
    "name": 'Hynix DDR4-2666',
    "family": 'DDR4',
}

console.log(memory);