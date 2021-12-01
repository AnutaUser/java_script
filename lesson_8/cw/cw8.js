//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви
//     вчитесь (mon-year)
// let elementById = document.getElementById('main_header');
// elementById.classList.add('sep-2021');

//     b) робить шириниу елементу ul 400px
// let ulTag = document.getElementsByTagName('ul');
// for (const ulTagElement of ulTag) {
//     ulTagElement.style.width = '400px';
// }

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let className = document.getElementsByClassName('linkList');
// for (const element of className) {
//     element.style.width = '50%';
// }

//     d) отримує текст який зберігається в елементі з класом listElement2
// function getText(text) {
//     let liElement = document.getElementsByClassName('listElement2');
//     liElement.innerText= 'text';
// }

//     e) отримує всі елементи li та змінює ім колір фону на сірий
// let liElements = document.getElementsByTagName('li');
// for (const li of liElements) {
//     console.log(li.style.background = 'silver');
// }

//     f) отримує всі елементи 'a' та додає їм клас anchor
// let aTagName = document.getElementsByTagName('a');
// for (const aTag of aTagName) {
//     aTag.classList.add('anchor');
// }
// console.log(aTagName);

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу
//     дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let tagName = document.getElementsByTagName('a');
// for (const tagElement of tagName) {
//     if (tagElement.innerText === 'link3') {
//         tagElement.style.fontSize = '40px';
//     }
// }

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX -
//     текстовий контент елементу a
// for (const tagAdd of tagName) {
//     tagAdd.classList.add(tagAdd.innerText);
// }
// console.log(tagName);

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати
//     з prompt()
// let byClassName = document.getElementsByClassName('sub-header');
// for (const item of byClassName) {
//     item.style.background = prompt('Enter color:');
// }

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку
//     якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const textColor of byClassName) {
//     if (textColor.innerText === 'content 2 segment') {
//         textColor.style.color = prompt('Enter text color');
//     }
// }

//     k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний.
//     Текст отримати з prompt()
let textChange = document.getElementsByClassName('content_1');
// for (const item of textChange) {
//     item.innerText = prompt('Enter text');
// }

//     l) отримати елементи p та змінити їм padding на 20px
// let pPadding = document.getElementsByTagName('p');
// for (const p of pPadding) {
//     p.style.padding = '20px';
// }

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи
//     (mon-year. Пример sep-2021)
// let elementsByClassName = document.getElementsByClassName('text2');
// for (const el of elementsByClassName) {
//     el.innerText = 'sep-2021';
// }
