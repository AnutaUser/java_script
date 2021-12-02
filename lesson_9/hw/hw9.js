// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let elementDiv = document.createElement('div');
// // elementDiv.setAttribute('class', 'wrap' + ' ' + 'collapse' + ' ' + 'alpha' + ' ' + 'beta');
// elementDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
// elementDiv.innerText = 'Ура́н — сьома від Сонця велика планета Сонячної системи, належить до планет-гігантів. Діаметр Урана в 4 рази, а його маса — в 14,5 раза більші за земні, що робить його третьою за діаметром та четвертою за масою планетою Сонячної системи. Уран став першою планетою, відкритою у Новий час і за допомогою телескопа. Про відкриття Урана англійський астроном Вільям Гершель повідомив 13 березня 1781 року, тим самим уперше з часів античності розширивши межі Сонячної системи. Планета названа ім\'ям античного божества Урана, уособлення неба та піднебесного простору. На відміну від інших газових гігантів — Сатурна та Юпітера, що складаються переважно з водню і гелію — у надрах Урана та схожого з ним Нептуна відсутній металічний водень. Проте в них є багато високотемпературних модифікацій льоду — з цієї причини фахівці виділили ці дві планети в окрему категорію «крижаних гігантів». Зокрема, надра Урана складаються здебільшого з льодів і гірських порід. Основу атмосфери Урана складають водень і гелій. Крім того, в ній виявлені сліди метану та інших вуглеводнів, а також хмари з льоду, твердого аміаку та водню. Уран має найхолоднішу планетарну атмосферу у Сонячній системі з мінімальною температурою 49 К (–224 °C). Вважається, що Уран має складну шарувату структуру хмар, де водяна пара складає нижній шар, а метан — верхній. Як і інші газові гіганти Сонячної системи, Уран має систему кілець та магнітосферу. Крім того, навколо нього обертаються 27 супутників. Орієнтація Урана в просторі відрізняється від інших планет Сонячної системи — його вісь обертання лежить ніби на боці відносно площини обертання навколо Сонця. Унаслідок цього планета буває оберненою до Сонця то північним полюсом, то південним, то екватором, то середніми широтами. У 1986 році американський космічний апарат «Вояджер-2» передав на Землю знімки Урана, які він зробив, пролітаючи на відстані 81 500 кілометрів від планети.';
//
// let cloneNode = elementDiv.cloneNode(true);
// document.body.appendChild(cloneNode);
// document.body.appendChild(elementDiv);

// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу
// масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let menu = document.getElementsByClassName('menu')[0];
// let array = ['Main','Products','About us','Contacts'];
// for (const str of array) {
//     let liElement = document.createElement('li');
//     liElement.innerText = str;
//
//     menu.appendChild(liElement);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та
// // monthDuration
// // Завдання робити через цикли.
// let divContainer = document.createElement('div');
// divContainer.setAttribute('class', 'main');
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.setAttribute('class', 'target');
//     let h2 = document.createElement('h2');
//     h2.innerText = course.title;
//     let duration = document.createElement('p');
//     duration.setAttribute('class', 'number');
//
//     duration.innerText = course.monthDuration;
//     div.appendChild(h2);
//     div.appendChild(duration);
//     divContainer.appendChild(div);
// }
// document.body.appendChild(divContainer);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в
// // якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з
// // monthDuration елементу.
// //     Завдання робити через цикли.
// let divElement = document.createElement('div');
// for (const arrElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.setAttribute('class', 'item');
//     let h1 = document.createElement('h1');
//     h1.setAttribute('class', 'heading');
//     h1.innerText = arrElement.title;
//     let p = document.createElement('p');
//     p.setAttribute('class', 'description');
//     p.innerText = '-' + ' ' + arrElement.monthDuration + ' ' + 'months';
//     div.appendChild(h1);
//     div.appendChild(p);
//     divElement.appendChild(div);
// }
// document.body.appendChild(divElement);