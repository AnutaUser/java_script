// Всі функції повинні бути описані стрілочним типом!!!!

// 1 створити функцію яка обчислює та повертає площу прямокутника
//
// let rectangleArea = (a, b) => a * b;
// console.log(rectangleArea(20, 10));

// 2 створити функцію яка обчислює та повертає площу кола
// let circleArea = (r) => Math.round(Math.PI * Math.pow(r, 2));
// console.log(circleArea(10));

// 3 функцію яка обчислює та повертає площу циліндру
// let cylinderArea = (r, h) =>  Math.round(2 *Math.PI * r * h);
// console.log(cylinderArea(5, 10));

// 4 створити функцію яка приймає масив та виводить кожен його елемент
// let array = [25, 'Vasya', true, 31, 'Sveta', false, null, 58];
//
// let takeArray = (array) => [array];
// console.log(takeArray(array));
//
// let takeArray2 = (array) => {
//     for (i = 0; i < array.length; i++) {
//     }
//     return array;
// }
// console.log(takeArray2(array));

// 5 створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let paragraph = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('Ура́н — сьома від Сонця велика планета Сонячної системи, належить до планет-гігантів. Діаметр Урана в 4 рази, а його маса — в 14,5 раза більші за земні, що робить його третьою за діаметром та четвертою за масою планетою Сонячної системи. Уран став першою планетою, відкритою у Новий час і за допомогою телескопа. ');

// 6 створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let list = (li) => {
//     document.write(`<ul>`);
//     document.write(`<li>${li} 1</li> <li>${li} 2</li> <li>${li} 3</li>`);
//     document.write(`</ul>`);
// }
// list('Item');
// list('text');

// 7 створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let ulList = (text, number) => {
//     for (i = 0; i < number; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${text} ${i+1}</li>`);
//         document.write(`</ul>`);
//     }
// }
// ulList('Item', 3);
// ulList('List', 3);

// 8 створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [25, 'Vasya', true, 31, 'Sveta', false, null, 58];
// let elementArray = (array) => {
//     document.write(`<ol>`);
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//         // document.write(`<div>${array[i]}</div>`);
//         // document.write(`<p>${array[i]}</p>`);
//     }
//     document.write(`</ol>`);
// }
// elementArray(array);

// 9 створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
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
// ];
//
// let objectArray = (array) => {
//     for (i = 0; i < array.length; i++) {
//         // document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`)
//         // document.write(`<p>${array[i].id} ${array[i].name} ${array[i].age}</p>`)
//         document.write(`<h4>${array[i].id} ${array[i].name} ${array[i].age}</h4>`)
//     }
// };
// objectArray(array);