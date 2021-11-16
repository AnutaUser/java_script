// clw_3

let array = [2,17,13,6,22,31,45,66,100,-18];

        // 1
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     document.write(`<div>${array[i]}</div>`)
//     i++
// }
//
//         // 2
// for (let i = 0; i < 10; i++) {
//     console.log(array[i]);
//     document.write(`<div>${array[i]}</div>`)
// }

        //3
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     document.write(`<div>${array[i]}</div>`);
//     i+=2
// }
//
//         //4
// for (let i = 0; i < array.length; i += 2) {
//     console.log(array[i]);
//     document.write(`<div>${array[i]}</div>`);
// }
        //5
let i = 1;
while (i < array.length) {
    console.log(array[i])
    i+=2
}

        //6
for (let i = 1; i < array.length; i += 2) {
    console.log(array[i])
}
