// 1 Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world';
// let length1 = str1.length;
// console.log(length1);
//
// let str2 = 'lorem ipsum';
// let length2 = str2.length;
// console.log(length2);
//
// let str3 = 'javascript is cool';
// let length3 = str3.length;
// console.log(length3);

// 2 Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1);
//
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
//
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);

// 3 Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let toLowerCase1 = toUpperCase1.toLowerCase();
// console.log(toLowerCase1);
//
// let toLowerCase2 = toUpperCase2.toLowerCase();
// console.log(toLowerCase2);
//
// let toLowerCase3 = toUpperCase3.toLowerCase();
// console.log(toLowerCase3);

// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(str.length)
// console.log(trim);
// console.log(trim.length);

// 5 Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let arr = [];
// arr.push(stringToarray(str))
// console.log(arr);
// document.write(arr);

// 6 Напишіть функцію delete_characters(str, length), яка повертає підрядок, що
// складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//         return str.substring(0, length);
// }
// console.log(delete_characters(str, 7));
// document.writeln(delete_characters(str, 7));
// console.log(delete_characters(str, 10));
// document.writeln(delete_characters(str, 10));

// 7 Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє
// тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let str = 'HTML JavaScript PHP';
// let insert_dash = (str) => {
//       let repAllToUp = str.replaceAll(' ', '-').toUpperCase();
//       return repAllToUp;
// }
// console.log(insert_dash(str));

// 8 Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
//
// let str = 'kаждый охотник желает знать';
// let uppercase = (str) => {
//       // if (!str) return str;
//       return str[0].toUpperCase() + str.slice(1);
// };
// console.log(uppercase(str));

// 9 Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово
// починається з великої літери.
// let capitalize = (str) => {
//       return str[0].toUpperCase() + str.slice(1, 7)
//           + str[7].toUpperCase() + str.slice(8, 15)
//           + str[15].toUpperCase() + str.slice(16, 22)
//           + str[22].toUpperCase() + str.slice(23);
// }
// console.log(capitalize(str));
