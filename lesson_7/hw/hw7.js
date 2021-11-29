// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArray = [
    new User(31, 'Vasya', 'Vasyliv', 'Vasya@.com', 380671231212),
    new User(22, 'Olya', 'Petriv', 'Olya@.com', 380501472525),
    new User(13, 'Kolya', 'Baran', 'Kolya@.com', 380679876565),
    new User(54, 'Ira', 'Kuchera', 'Ira@.com', 380934564545),
    new User(65, 'Anya', 'Kolos', 'Anya@.com', 380633213232),
    new User(76, 'Ivan', 'Ivanenko', 'Ivan@.com', 380679879898),
    new User(57, 'Petro', 'Petrenko', 'Petro@.com', 380651474747),
    new User(8, 'Stepan', 'Stepanenko', 'Stepan@.com', 380483699636),
    new User(199, 'Lena', 'Serhienko', 'Lena@.com', 380975555555),
    new User(100, 'Katya', 'Myskiv', 'Katya@.com', 380674441122)
]
console.log(userArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
// залишивши тільки об'єкти з парними id (filter)

let filter = userArray.filter((user) => {
    if (user.id % 2 === 0) {
        return user;
    }
    });

console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = userArray.sort((a, b) => a.id - b.id);
console.log(userArray)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client

let newArray = [
    new Client(31, 'Vasya', 'Vasyliv', 'Vasya@.com', 380671231212, order = ['milk', 'bread', 'soap']),
    new Client(22, 'Olya', 'Petriv', 'Olya@.com', 380501472525, order = ['milk', 'bread',]),
    new Client(13, 'Kolya', 'Baran', 'Kolya@.com', 380679876565, order = ['milk', 'bread', 'soap', 'butter']),
    new Client(54, 'Ira', 'Kuchera', 'Ira@.com', 380934564545, order = ['milk', 'bread', 'soap', 'salt', 'butter']),
    new Client(65, 'Anya', 'Kolos', 'Anya@.com', 380633213232, order = ['milk']),
    new Client(76, 'Ivan', 'Ivanenko', 'Ivan@.com', 380679879898, order = ['bread', 'soap']),
    new Client(57, 'Petro', 'Petrenko', 'Petro@.com', 380651474747, order = ['apple', 'banana', 'milk', 'butter', 'bread', 'salt', 'soap']),
    new Client(8, 'Stepan', 'Stepanenko', 'Stepan@.com', 380483699636, order = ['milk', 'bread', 'soap']),
    new Client(199, 'Lena', 'Serhienko', 'Lena@.com', 380975555555, order = ['milk', 'salt', 'bread', 'salt','soap']),
    new Client(100, 'Katya', 'Myskiv', 'Katya@.com', 380674441122, order = ['milk', 'butter', 'bread', 'soap'])
];
console.log(newArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = newArray.sort((a, b) => a.order.length - b.order.length);
console.log(newArray);
