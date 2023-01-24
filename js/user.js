// Описание что это за класс


let user = {
    "login": '',
    "password": '',
    "validatePassword": function () {
        if (this.password.length > 6) {
            return true;
        }
        else { return false; }
    }
}

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    validatePassword() {
        console.log('WORK PARENT PASS');
        if (this.password.length > 6) {
            return true;
        }
        else {
            return false;
        }
    }
}