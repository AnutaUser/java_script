// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template1.1


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
document.write(`<li class="title"><h1>LIST OF ITEMS</h1></li>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li class="list">${listOfItems[i]}</li>`);
    console.log(listOfItems[i]);
}
document.write(`</ul>`)