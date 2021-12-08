// 1 Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let elementById = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//     elementById.hidden = true;
// };
//
// let elementById = document.getElementById('text');
// let btn = document.getElementById('btn');
// let flag = true;
// btn.onclick = () => {
//     if (flag) {
//         elementById.hidden = true;
//     }else {
//         elementById.hidden = false;
//     }
//     flag = !flag;
// };
//
// let elementById = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//     elementById.classList.toggle('hidden');
// };

// 2 Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.getElementById('btn');
// btn.onclick = () => {
//     // btn.hidden = true;
//     btn.style.display = 'none';
//
// };

// 3 створити інпут який приймає вік людини та кнопку яка підтверджує дію.При
// натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він
// ніж 18, та повідомити про це користувача
//
// let form = document.forms.btn2;
// form.onsubmit = (e) => {
//    e.preventDefault()
//     if (form.age.value < 18) {
//         alert('You are too young');
//     }else {
//         alert('Welcome!')
//         }
// };

// 4 Создайте меню, которое раскрывается/сворачивается при клике
//
// let menuEl = document.getElementsByClassName('menu');
// let titleEl = document.getElementsByClassName('title')[0];
// let ul = document.getElementsByTagName('ul');
// for (const ulElement of ul) {
//     titleEl.onclick = () => {
//         ulElement.classList.toggle('hidden');
// }
// };

let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    let ul = document.querySelector('ul');
    ul.classList.toggle('hidden');
};

// 5 Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title:'«Великий Гетсбі» Френсіса Скотта Фітцджеральда.', body: 'Джей Гетсбі зовсім не такий вже великий персонаж, яким його прийнято вважати. Хіба мало людей здійснюють сумнівні вчинки тільки для того, щоб спокусити чужу дружину!'},
    {title:'«Сто років самотності» Габріеля Гарсії Маркеса. ', body: 'Все одно, що спробувати простежити сім племен родоводу знайомого студента по обміну з Колумбії.'},
    {title:'«Сторонній» Альбера Камю.', body: 'Прочитана в оригіналі тисячами, які вивчають французьку, ця невеличка книжка завинила в тому, що студенти тепер можуть читати французькі есе з екзистенціалізму, але як і раніше не в змозі запитати дорогу до Лувру.'},
    {title:'«Алхімік» Пауло Коельо.', body: 'Коли вища форма життя зійде до створення книги про людство, вона неодмінно процитує цю безпорадну книгу, що прикидається літературою, як свідчення його найглибшого занепаду. Правда, було продано більше 65 млн. копій, і її високо оцінила Мадонна.'},
    {title:'«Їж, молись, кохай» Елізабет Гілберт.', body: 'Їж, молись, кохай, валяйся на дивані, скаржся, подорожуй, потурай собі, пиши, перевір свій банківський рахунок.'},
    {title:'«Коротка історія часу» Стівена Хокінга.', body: 'Психоделічна подорож по Америці, квінтесенція гонзо-журналістики з усією її важкістю для читання (хоча це – на любителя).'},
    {title:'«Небезпечні зв’язки» Шодерло де Лакло.', body: 'Прекрасний текст, але, на жаль, по-французьки, і без фотографії актриси, яка грала Баффі, на обкладинці. Та вже, фільм “Жорстокі ігри”, принаймні, англійською мовою.'},
    {title:'«Звіяні вітром» Маргарет Мітчелл.', body: 'А в цьому випадку, навпаки: книга цікавіше мюзиклу – у «Вест-Енді» він протримався всього два місяці. Насправді, краще за все вийшов фільм.'},
    {title:'«Кентерберійські оповідання» Джеффрі Чосера.', body: 'Не такі вже прості, що б там не говорили вам ваші вчителі англійської мови. До того ж відсутня рекомендація від Стівена Фрая на обкладинці, так, що можливо, книга і зовсім не варта уваги.'},
    {title:'«Гордість і упередження» Джейн Остін.', body: ' Несе відповідальність за те, що газети часто-густо починають статті зворотом: «загальновідомо, що …»'}
];
for (const comment of comments) {
    let divElement = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerText = comment.title;
    let p = document.createElement('p');
    p.innerText = comment.body;
    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'Close';
    buttonElement.onclick = () => {
        // p.style.display = 'none';
        // p.hidden = true;
        // buttonElement.previousElementSibling.style.display ='none';
        p.classList.toggle('hidden');
    };

    divElement.append(h3, p, buttonElement);
    document.body.appendChild(divElement);
};
