// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let n4 = 'Albus---..__Dumbledore';
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в
// // наступнйи вигляд
//
// let replace1 = (n1) => n1.replaceAll('..', ' ');
// let replace2 = (n2) => n2.replaceAll('---', ' ');
// let replace3 = (n3) => n3.replaceAll('__', ' ');
// let replace4 = (n4) => n4.replaceAll('---..__', ' ');
//
// console.log(replace1(n1));
// console.log(replace2(n2));
// console.log(replace3(n3));
// console.log(replace4(n4));
// //
// let newName = (name) => {
//     return name
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
//         .replaceAll('  ', '');
// }
//     console.log(newName(n1));
//     console.log(newName(n2));
//     console.log(newName(n3));
//     console.log(newName(n4));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні
// від 0 до 100.
//
// let arrayRandom = (size) => {
//     let arr = [];
//     for (i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// };
// console.log(arrayRandom(20));
// console.log(arrayRandom(100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
// числових значень. Відсортувати його за допомоги sort
// let randomArray = (size) => {
//     let array = [];
//     for (i = 0; i < size; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// };
// console.log(randomArray(50));
// // document.write(randomArray(50));
//
// // let sort = randomArray(50).sort((a, b) => b - a);
// let sort = randomArray(50).sort((a, b) => a - b);
// console.log(sort);
// document.write(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих
// числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//
// let ranArray = (size) => {
//     let newArray = [];
//     for (i = 1; i < size; i++) {
//         newArray.push(Math.round(Math.random() * 100));
//     }
//     return newArray;
// };
// console.log(ranArray(100));
//
// let filter = ranArray(100).filter (arr => arr % 2 === 0);
// let sort = filter.sort((a, b) => a - b);
// console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let randomArr = (size) => {
//     let arrNew = [];
//     for (i = 0; i < size; i++) {
//         arrNew.push(Math.round(Math.random() * 100));
//     }
//     return arrNew;
// };
// console.log(randomArr(50));
// let map = randomArr(50).map(value => value + ' ');
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від
// більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// let sortNums = function (nums, direction) {
//     let newArr = [];
//         if (direction === 'ascending') {
//            return newArr = nums.sort((a,b) => a - b);
//         }
//         if (direction === 'descending') {
//             return newArr = nums.sort((a,b) => b - a);
//         }
//     }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
//
// let nums = [11,21,3];
// let sortNums = function (nums, direction) {
//         if (direction === 'ascending') {
//            return nums.sort((a,b) => a - b);
//         }
//         if (direction === 'descending') {
//             return nums.sort((a, b) => b - a);
//         } else {
//             return [];
//         }
//     }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
//
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// let sort = coursesAndDurationArray.sort((b, a) => a.monthDuration - b.monthDuration);
// console.log(sort);
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);
