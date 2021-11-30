// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або
//     document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let pContent = document.getElementById('content');
console.log(pContent.innerText);

// -- отримує текст з блоку з id "rules"
let elementById = document.getElementById('rules');
console.log(elementById.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
let content = document.getElementById('content');
console.log(content.innerText = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.');

// -- замініть текст параграфа з id 'rules' на будь-який інший
let rules = document.getElementById('rules');
console.log(rules.innerText = ('Второе правило Бойцовского клуба: никогда никому не рассказывать о Бойцовском клубе'));

// -- змініть кожному елементу колір фону на червоний
let body = document.body;
// console.log(body.children);
for (const element of body.children) {
    element.style.background = 'red';

}

// -- змініть кожному елементу колір тексту на синій
let bodyColor = document.body;
for (const el of bodyColor.children) {
    el.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let id = document.getElementById('rules');
console.log(id.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let className = document.getElementsByClassName('fc_rules');
for (const li of className) {
    li.style.color = 'red';
    li.style.color = 'gold';
}
