// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squareRectangle(a, b) {
//     console.log(a);
//     console.log(b);
//     return a * b;
// }
// console.log(squareRectangle(2, 44));

// 2  створити функцію яка обчислює та повертає площу кола з радіусом r
// function squareCircle(r) {
//     return Math.PI * Math.pow(r, 2);
// }
// console.log(squareCircle(2));

// 3 створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function volumeCylinder(h, r) {
//     return h * Math.PI * Math.pow(r, 2);
// }
//
// console.log(volumeCylinder(10, 2));

// 4 створити функцію яка приймає масив та виводить кожен його елемент
// let array = [2, 5, 'Vasya', true]
// function arrayObj(array) {
//         for (i = 0; i < array.length; i++) {
//                 document.write(array[i]);
//         }
// }
// document.write(arrayObj(array));
//
// function array2(arr) {
//         for (const arrElement of arr) {
//                 console.log(arrElement);
//         }
// }
//
// console.log(array2('arrElement'));

// 5 створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraf("cmsdmcsdk zsx v45v vmskn")
// function par(text) {
//     for (i = 0; i < 5; i++) {
//         document.write(`<p>${text}</p>`);
//     }
// }
// par("jcnscn efciacm")

// 6 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function unOrdered(list) {
//     document.write(`<ul>`);
//     document.write(`<li>${list}</li> <li>${list}</li> <li>${list}</li>`);
//     document.write(`</ul>`);
// }
// unOrdered('knvlzn, jbb  25');
//
// function unOrdered(list) {
//     for (i = 0; i < 3; i++) {
//         document.write(`<li>${list}</li>`);
//     }
// }
// unOrdered('nnn jdjf odkfz');

// 7 створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function uList(list) {
//     for (i=0; i<3; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${list}</li>`);
//         document.write(`</ul>`);
//     }
// }
// uList('knkndihvnl');

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [25, 96, 'text', 'more text', true, false, null];
//
// function arrayObj(array) {
//     for (i = 0; i < array.length; i++) {
//         // document.write(`<li>${array[i]}</li>`);
//         document.write(`<div>${array[i]}</div>`);
//     }
// }
//
// arrayObj(array);

// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let array =[
//     {id:1,
//     name:'Vasya',
//     age:26},
//
//     {id:2,
//     name:'Olya',
//     age:26},
//
//     {id:3,
//     name:'Stephan',
//     age:35},
//
//     {id:4,
//     name:'Ira',
//     age:22},
//
//     {id:5,
//     name:'Katya',
//     age:17},
// ]
//
// function arrayOfObject(array) {
//     for (i = 0; i < array.length; i++) {
//         document.write(`<div>${array[i].id}  ${array[i].name} - ${array[i].age}</div>`);
//     }
// }
//
// arrayOfObject(array);


