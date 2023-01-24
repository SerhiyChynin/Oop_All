// Что такое ООП
// 1. Программы становяться сложнее в коде начинаеш теряться
// Разбивка на модули
// модульность
// рефакторинг - улучшение кода оптимизация старого кода, переписать код
// определение сущности оч важно для ооп
// ООП - абстракция - модели - параметры (свойства, методы)
// user (username, password, email)
// user(login(), logout(), ...)
// Наследование
// user - курсы
// user.getCursios
// user.rate
// user.role - админ, студент, модератор
// user(login(), logout() - username, password, email)

let user =  {
    username: '',
    password: '',
    email: '',
    role: ''
    //методы
    //сброс пароля
    //getCursios()

};
// наследование - расширение, расширить то что есть
// admin расширение user
admin(user) {
    //changeUserStatus()
    //changeUserCursios()
    //перезаписать метод getCursios(){получить  все курсы}
}
student(user) {
    //rate
    //перезаписать метод getCursios(){получить курсы конкретного студента}

}

// Полиморфизм - множество форм одного и того же метода, возможность переменной принимать разные типы данных
// Один и тот же метод будет меняться в зависимости от сущности. Пример с getCursios() student admin, кто зашел разные доп решения этой функцииб ну суть одна, результат может быть разный
// Инкапсуляция  - скрытие каких то реализаций

course {
    title: '',
    url: '',
    description: '',    
    price: 20.00  // private, protected...
    getPrice: {

    }
}

course.price // предупреждение нет доступа
course.getPrice() // 18$ со скидкой.
// Инкапсуляция -  переменная не была доступна при прямом обращение, препятствие прямому обращению к свойству либо методу, пишттса специальное свойство либо метод (контролируемый доступ внутри которого какой то код который обрабатывает данные и выдает результат)
// Как реализовано не должно беспокоить програмиста,  он всего лишь этим пользуется выводит гетпрайс, а как оно выводиться, высчитывается его не волнует.
// Инкапсулировал, скрыл - не значит что их нельзя посмотреть, нельзя на прямую обратиться и получить сырые данные. Вы должны обращаться
// через, продуманные разрешонные мной досупы(методы функции) и обработанные данные вы получите, позволяет повысить безопасность.


