// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Cars(model, producer, year_of_manufacture, max_Speed, engine_capacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year_of_manufacture = year_of_manufacture;
//     this.max_Speed = max_Speed;
//     this.model = engine_capacity;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${max_Speed} на годину!`);
//     }
//     this.info = function () {
//         console.log(`model: ${model},
//         producer: ${producer},
//         year_of_manufacture: ${year_of_manufacture},
//         max_Speed: ${max_Speed},
//         model: ${engine_capacity}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(max_Speed += newSpeed);
//     };
//     this.changeYear = function (newValue) {
//         console.log(year_of_manufacture = newValue);
//         return newValue;
//     }
//     this.AddDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Cars( 'BMW', 'German', 2010, 250, 2.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(1999);
// // console.log(car.driver);
// car.AddDriver('Vasyl Petrenko');
// console.log(car.driver);
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Cars{
//     constructor(model, producer, year_of_manufacture, max_Speed, engine_capacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year_of_manufacture = year_of_manufacture;
//         this.max_Speed = max_Speed;
//         this.engine_capacity = engine_capacity;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю: ${this.max_Speed} на годину!`);
//     }
//     info() {
//         console.log(`model: ${this.model};
//         producer: ${this.producer};
//         year_of_manufacture: ${this.year_of_manufacture};
//         max_Speed: ${this.max_Speed};
//         engine_capacity: ${this.engine_capacity}`)
//     }
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.max_Speed += newSpeed);
//     }
//     changeYear(newValue) {
//         console.log(this.max_Speed = newValue);
//     }
//
//     addDriver (driver) {
//         console.log(this.driver = driver);
//     }
// }
// let car = new Cars( 'BMW', 'German', 2010, 250, 2.5);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2154);
// car.addDriver('Vasyl Petrenko');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та
//     відповідного колбеку

class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let array = [
    new Cinderella('Snowwhite', 18, 37),
    new Cinderella('Avrora', 20, 35),
    new Cinderella('Ariel', 21, 39),
    new Cinderella('Bell', 16, 40),
    new Cinderella('Jasmine', 17, 36),
    new Cinderella('Rapunzel', 22, 37),
    new Cinderella('Merida', 25, 34),
    new Cinderella('Pocahontas', 19, 39),
    new Cinderella('Sofia', 18, 38),
    new Cinderella('Moana', 20, 38)
];
console.log(array);

class Prince {
    constructor(name, age, the_shoe_he_found) {
        this.name = name;
        this.age = age;
        this.the_shoe_he_found = the_shoe_he_found;
    }
}

let prince = new Prince('Charming', 25, 34);
console.log(prince);

let para = (array, prince) => {
    for (const arrayElement of array) {
        if (arrayElement.foot_size === prince.the_shoe_he_found) {
            return `${arrayElement.name}`
        }
    }
};
console.log(para(array, prince));

let newPrinces = array.find((i) => i.foot_size === prince.the_shoe_he_found);
console.log(newPrinces);

