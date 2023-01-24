class Student extends User {
    constructor(username, password, nickname) {    //Конструктор устанавливает свойства обьекта когда мы его создаем на основе класса.
        super(username, password)                 //Конструктор запускается в момент создания, если мы передали параметры то они будут занесены как свойства
        this.nickname = nickname;
    }
    getStudentCourses() {
        return [1, 2, 3];
    }
     validatePassword() {
         super.validatePassword();           //suoer это обращениу прототипу(родителю) и возможность запустить его методы
        if (this.password.length > 10) {
            return true;
        }
        else {
            return false;
        }
    }
}
