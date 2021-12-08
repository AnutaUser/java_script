// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку
// считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let btn = document.getElementById('btn');
btn.onclick = () => {
    let name = document.forms.form1.name.value;
    let age = document.forms.form1.age.value;
    let userName = document.forms.form2.userName.value;
    let status = document.forms.form2.status.value;
    console.log(name, age, userName, status);
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість
// ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом. (Додаткова частина для завдання)

let tableForm = document.forms['makeTable'];
tableForm.onsubmit = (e) => {
    e.preventDefault();
    let lines = +tableForm.lines.value;
    let cells = +tableForm.cells.value;
    let content = tableForm.content.value;
    console.log(lines, cells, content);

    let table = document.createElement('table');
    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = content;
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badWords = ['arse', 'bugger', 'git ', 'minger ', 'Sod-off!', 'shit ', 'arsehole', 'bint ', 'bollocks', 'bullshit', 'munter', 'pissed'];
// let btn3 = document.getElementById('btn3');
// btn3.onclick = () => {
//     let word = document.getElementById('bad').value;
//     for (const badWord of badWords) {
//         if (badWord === word) {
//             alert('NOT CORRECT');
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let button = document.getElementById('btn3');
button.onclick = () => {
    let sentence = document.getElementById('bad').value;
    for (const badWord of badWords) {
        if (sentence.includes(badWord)) {
            alert('ERROR');
        }
    }
}