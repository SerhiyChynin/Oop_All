class User1 {
    constructor(name, password) {
        this.name = name;
        this.password = password;     //Блочная структура и область видимости замкнута на класс
    }
    sayHello() {
        console.log(this.name + ' Hello');
        return this.name
    }
}

const alex = new User1('Alex');
alex.password = '222asfhuio';
// console.log(alex);

class Person extends User1 {
    constructor(name, password, email) {   //Если мы наследуемся от какого то класса то в конструкторе  необходимо указать ссылку super() и передать туда параметры которые нужны для класса родителя
        super(name, password)               //super() нужно вызывать всегда даже если нет параметров, иначе будет ошибка
        this.name = name;                   // super() вызывает родительский конструктор, передает данные в него и записует в this
        this.password = password;
        this.email = email;
    }
    sayHello2() {
        console.log(super.sayHello());
        console.log(this.email);
        return 'password: ' + this.password
        
    }
}

const pers = new Person('Serhii', 'SDF!@#3342', 'Sasha@gmail.com');
// console.log(pers);
// console.log(alex);
//  console.log(alex.sayHello());
// console.log(pers.sayHello());
console.log(pers.sayHello2());

class User2 {
    sayHello3() {
    console.log('Hello Baby');
        return 'Ha-Ha';
    }
}

const u = new User2()
console.log(u.sayHello3());

class Person2 extends User2 {
    constructor(name) {
        super()
        this.name = name
    }
}

const pers2 = new Person2('Goga');
console.log(pers2);


// Home Work

class List {
    constructor(item){
        this.item = item;
    }
    render() {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li = [];
        // ul.innerHTML = this.item;
        for (let i = 0; i < this.item.length; i++) {
            li.push(ul.innerHTML += this.item[i] + ' ')
        }
        return ul;
    }
}

const item = new List(['one', 'two', 'three', 'four'])
// console.log(item);
console.log(item.render());


// Get Set

class User3 {
    constructor() {
    }
    #test = 'hohoho';
    #url = 'http://backend.ex';
    send() {
        
    }
    set name(name) {
        console.log('private: ' + this.#test);
        this._name = name.trim().toLowerCase();
    }
    get name() {
        return this._name
    }
    one() {
        console.log('private: ' + this.#test);
        
    }
}

const man = new User3();
// man._name = 'Kola';    //_ нижнее подчеркивание обозначает защищенное свойство
// man.setNameOnThisClass(' Daddy');
man.name = '  dddelaaEEE'
console.log(man);
console.log(man.name);
console.log(man);

class User4 extends User3 { };
const man2 = new User4();
man2.name = 'Oleg';
man2.one();

class Test{
    constructor() {
        
    }
    set password(password) {
        this._password = password.trim();
        console.log(this.password);
    }
    get password() {
        return this._password;
    }
}
const word = new Test();
word.password = '22woijswf';
console.log(word);
console.log(word._password);



// Static Method

