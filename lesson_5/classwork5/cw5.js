// Всі функції повинні бути описані стрілочним типом!!!!

// // 1 створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// let minNumber = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//         document.write(a);
//     }else if (b < a && b < c) {
//         console.log(b);
//         document.write(b);
//     }else {
//         console.log(c);
//         document.write(c);
//     }
// }
// minNumber(215, 60, 9);
// minNumber(215, 60, 99);
// minNumber(5, 60, 9);

// 2 створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let maxNumber = (x, y, z) => {
//     if (x > y && x > z) {
//         console.log(x);
//         document.write(x);
//     }else if (y > x && y > z) {
//         console.log(y);
//         document.write(y);
//     }else {
//         console.log(z);
//         document.write(z);
//     }
// };
// maxNumber(24, 37, 215);
// maxNumber(24, 317, 215);
// maxNumber(824, 37, 215);

// 3 створити функцію яка повертає найбільше число з масиву
let numArray = [91, -654, -647, 1542, 965, -52];
let maxNumArray = (numArray) => {
    let max = numArray[0];
    for (const numArrayElement of numArray) {
        if (numArrayElement > max) {
            max = numArrayElement;
            console.log('max = ' + max);
            document.write(`<div>max = ${max}</div>`);
        }
    }
}
maxNumArray(numArray);

// 4 створити функцію яка повертає найменьше число з масиву
let minNumArray = (numArray) => {
    let min = numArray[0];
    for (const minElement of numArray) {
        if (minElement < min) {
            min = minElement;
            console.log('min = ' + min);
            document.write(`<div>min = ${min}</div>`);
        }
    }
}
minNumArray(numArray);

// 5 створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArray = (numArray) => {
    let sum = 0;
    for (const numElement of numArray) {
        sum = numElement + sum;
    }
    return sum;
}
console.log('sum = ' + sumArray(numArray));
document.write('sum = ' + sumArray(numArray));

// 6 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageArray = (numArray) => {
    let arith = 0;
    for (const numArrayElement of numArray) {
        arith += numArrayElement;
    }
    return arith / numArray.length;
}

console.log('arithmean = ' + averageArray(numArray));
document.write(`<div>arithmetic mean = ${averageArray(numArray)}</div>`);

// 7 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

let minMaxFn = (...arg) => {
    let max = arg[0];
    let min = arg[0];
    for (const numElement of arg) {
        if (numElement < min) {
            min = numElement;
        }
        if (numElement > max) {
            max = numElement;
        }
    }
    console.log("max:", max);
    return min;
}
document.write('min: ' + minMaxFn(25, 54, -45));

// 8 створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні
// числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomizer = (lenght) => {
    let elem = [];
    for (i = 0; i < lenght; i++) {
        // elem [i] = Math.round(Math.random() * 100);
        elem.push(Math.round(Math.random() * 100))
    }
    return elem;
};
console.log(randomizer(10));
document.write(`<div>${randomizer(10)}</div>`);


// 9 створити функцію яка заповнює масив рандомними числами в діапазоні
// від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let random = (length, limit) => {
    let el = [];
    for (i = 0; i < length; i++) {
        // el [i] = Math.round(Math.random() * limit);
        el.push(Math.round(Math.random() * limit));
    }
    return el;
};
console.log(random(20, 10));
document.write(random(20, 10));

// 10 Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let revers = (numArray) => {
    let arr = [];
    for (let i = numArray.length - 1, ri = 0; i >= 0; i--, ri++) {
            arr[ri] = numArray[i];
    }
    return arr;
}
console.log(revers(numArray));
document.write(`<div>${revers(numArray)}</div>`);

