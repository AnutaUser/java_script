// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let naturalNum = (lenght) => {
//     let n = [];
//     for (i = 1; i <= lenght; i++) {
//         console.log(`${i}`);
//         document.write(`<div>${i}</div>`);
//     }
// };
// naturalNum(50);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке
// возрастания, если A < B, или в порядке убывания в противном случае.
//
// let printNumbers = (a, b) => {
//     if (a < b) {
//         for (i = a; i <= b; i++) {
//             console.log(`${i}`);
//             document.write(`<div>${i}</div>`);
//         }
//     }
//     else {
//         for (let i = a; i >= b; i--) {
//             const yElement = [i];
//             console.log(`${i}`);
//             document.write(`<div>${i}</div>`);
//             // return;
//         }
//     }
// };
// printNumbers(36, 24);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в
// індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let array = [9, 8, 0, 4];
let foo = (array, i) => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr[`${i}`] = arr[`${i+1}`]
        }

    return arr;
}
    console.log(foo(array, 0));
    // console.log(foo(array, 1));
    // console.log(foo(array, 2));
    // document.write(foo(array, 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]