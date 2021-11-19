// 1 створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(a, b, c) {
//     if (a < b && a < c) {
//         console.log('a');
//     }else if (b < a && b < c) {
//         console.log('b');
//     }else if (c < a && c < b) {
//         console.log('c');
//     }
// }
// numbers(5, 3, 95);

// 2 створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers(a, b, c) {
//     if (a > b && a > c) {
//         console.log(`${a}`);
//     }else if (b > a && b > c) {
//             console.log(`${b}`);
//     }else {
//         console.log(`${c}`);
//     }
// }
// numbers(7, 754, 95);

// 3 створити функцію яка повертає найбільше число з масиву
// let numbers = [25, 34, 15, 5124, 2021, 2];
//
// function maxNumber(numbers) {
//     let max = numbers[0];
//     for (const max1 of numbers) {
//         if (max1 > max) {
//             max = max1;
//         }
//     }
//         return max;
// }
// document.write(maxNumber(numbers));

// 4 створити функцію яка повертає найменьше число з масиву
// let numbers = [25, 34, 15, 5124, 2021, 2];
//
// function minNumber(numbers) {
//     let min = numbers[0];
//     for (const min1 of numbers) {
//         if (min1 < min) {
//             min = min1;
//         }
//     }
//     return min;
// }
// document.write(minNumber(numbers));

// 5 створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [25, 34, 15, 5124, 2021, 2];
//
// function sumNumbers(numbers) {
//     let result = 0;
//     for (const number of numbers) {
//         result = result + number;
//     }
//     return result;
// }
// document.write(sumNumbers(numbers));

// 6 створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [25, 34, 15, 5124, 2021, 2];
//
// function arithmeticMean(numbers) {
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     return result / numbers.length;
// }
//
// document.write(arithmeticMean(numbers));

// 7 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numbers = [25, 34, 15, 5124, 2021, 2];
//
// function maxMin(numbers) {
//     let max = numbers[0];
//     let min = numbers[0];
//     for (const element of numbers) {
//         if (element > max){
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(maxMin(numbers));

// 8 створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomizer(length) {
//     let element = [];
//     for (let i = 0; i < length; i++) {
//         element.push(Math.round(Math.random() * 100));
//     }
//     return element;
// }
// document.write(randomizer(50));

// 9 створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// function random(lenght, limit) {
//     let element = [];
//     for (i = 0; i < lenght; i++) {
//         element.push(Math.round(Math.random() * limit));
//     }
//     return element;
// };
// document.write(random(21, 100));

// 10 Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let numbers = [25, 34, 15, 5124, 2021, 2];

function revers(number) {
    let num = [];
    for (let i = number.length - 1, el = 0; i >= 0; i--, el++) {
        num[el] = number[i];
    }
    return num;
}
document.write(revers(numbers));


