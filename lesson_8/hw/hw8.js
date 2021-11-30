// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або
//     document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

let pElement = document.getElementsByTagName('p');
console.log(pElement.innerText);

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
let elById1 = document.getElementById('content');
console.log(elById1.style.background = "red");

let elById2 = document.getElementById('rules');
console.log(elById2.style.background = "red");

let tagName = document.getElementsByTagName('ul');
for (const li of tagName) {
    console.log(li.style.background = 'red');
}

// -- змініть кожному елементу колір тексту на синій
let byId1 = document.getElementById('content');
console.log(byId1.style.color = "blue");

let byId2 = document.getElementById('rules');
console.log(byId2.style.color = "blue");

let nameTag = document.getElementsByTagName('ul');
for (const li of nameTag) {
    console.log(li.style.color = 'blue');
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = document.getElementsByClassName('fc');
console.log(classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let byTag = document.getElementsByTagName('ul');
for (const li of nameTag) {
    // console.log(li.style.color = 'red');
    console.log(li.style.color = 'gold');
}
console.log(byTag);