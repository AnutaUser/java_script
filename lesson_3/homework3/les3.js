//task 1
// let numbers = [1, 3, 9, 27, 81];
// console.log(numbers);
// let string = ['Vasya', 'Ira', 'Kolya', 'Anya', 'Petya'];
// console.log(string);
// let boolean = [true, false, false, true, true];
// console.log(boolean);
// let array = [25, 'Vasya', true, 'Ira', false];
// console.log(array);

//task 2
// let array = [];
// for (let i = 1; i < 101; i++) {
//     document.write(`<div> item ${i}</div>`);
//     console.log(` item ${i}`);
// }

//task 3
// for (let text = 0; text < 10; text++) {
//     document.write('<div>text</div>');
// }
// for (let itext = 1; itext < 11; itext++) {
//     document.write(`<div>text ${itext}</div>`);
// }
// let t = 0;
// while (t < 20) {
//     document.write('<h1> Text </h1>')
//     t++;
// }
// let it = 1;
// while (it < 21) {
//     document.write(`<h1> Text ${it} </h1>`);
//     it++;
// }

//task 4
// let array1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// for (let field in array1) {
//     console.log(array1[field]);
// }
// let array2 = ['Vasya', 'Ira', 'Kolya', 'Anya', 'Petya', 'Ivan', 'Stepan', 'Sveta', 'Alya', 'Olya'];
// for (let field in array2) {
//     console.log(array2[field]);
// }
// let array3 = ['Vasya', 25, true, 'Ira', 30, true, 'Kolya', 29, false, 98];
// for (let field in array3) {
//     console.log(array3[field]);
// }
// let array4 = ['Vasya', 25, true, 'Ira', 30, true, 'Kolya', 29, false, 98];
// for (let field of array4) {
//     if (typeof field === 'boolean') {
//        console.log(field);
//     }
// }
// let array5 = ['Vasya', 25, true, 'Ira', 30, true, 'Kolya', 29, false, 98];
// for (let field of array5) {
//     if (typeof field === 'number') {
//         console.log(field);
//     }
// }
// let array6 = ['Vasya', 25, true, 'Ira', 30, true, 'Kolya', 29, false, 98];
// for (let field of array6) {
//     if (typeof field === 'string') {
//         console.log(field);
//     }
// }

//task 5
    let array = [];
    array[0] = 'Anya';
    array[1] = 25;
    array[2] = true;
    array[3] = 'Vasya';
    array[4] = 33;
    array[5] = false;
    array[6] = 'Olya';
    array[7] = 30;
    array[8] = true;
    array[9] = null;
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}


// for (let i = 0; i < 10; i++) {
//     console.log(`Item ${i}`);
//     document.write(`<div>Item ${i}</div>`)
// }
// for (let k = 1; k < 101; k++) {
//     console.log(`List ${k}`);
//     document.write(`<div>List ${k}</div>`)
// }
// for (let a = 0; a < 100; a += 2) {
//     console.log(`Name ${a}`);
//     document.write(`<h1>Name ${a}</h1>`)
// }
// for (let s = 2; s < 102; s += 2) {
//     console.log(`Even numbers ${s}`);
//     document.write(`<div>Even numbers ${s}</div>`)
// }
// for (let d = 1; d < 101; d += 2) {
//     console.log(`Odd numbers ${d}`)
//     document.write(`<h2>Odd numbers ${d}`)
// }
