// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form1 = document.forms.form1;
// form1.onsubmit = (e) => {
//     e.preventDefault();
//     let name = form1.name.value;
//     let age = form1.age.value;
//     console.log(name, age);
//     localStorage.setItem('user', JSON.stringify({name, age}));
// };

// let {name, age} = document.forms.form1;
// let btn = document.getElementById('btn');
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem('key', JSON.stringify(user));
// };
// btn.onclick = () => {
//     save(name.value, age.value);
// };

// let form2 = document.createElement("form");
// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// input2.type = 'number';
// let button = document.createElement('button');
// button.innerText = 'save';
// form2.onsubmit = (e) => {
//     e.preventDefault();
//     let name = input1.value;
//     let age = input2.value;
//     console.log(name, age);
//     localStorage.setItem('user', JSON.stringify({name, age}));
// };
//
// form2.append(input1, input2, button);
// document.body.appendChild(form2);


// -створити форму з інпутами для model,type та volume автівки.
//  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let form3 = document.forms.form3;
// form3.onsubmit = (e) => {
//     e.preventDefault();
//     let model = form3.model.value;
//     let type = form3.type.value;
//     let volume = form3.volume.value;
//     let car = {model, type, volume};
//     let cars = JSON.parse(localStorage.getItem('cars'));
//     if (!cars) {
//         cars = [];
//     } else {}
//     cars.push(car);
//     localStorage.setItem('cars', JSON.stringify(cars));
// };

// let form3 = document.forms.form3;
// form3.onsubmit = (e) => {
//     e.preventDefault();
//     let model = form3.model.value;
//     let type = form3.type.value;
//     let volume = form3.volume.value;
//     let car = {model, type, volume};
//     console.log(car);
//     let cars = JSON.parse(localStorage.getItem('cars')) || [];
//     cars.push(car);
//     localStorage.setItem('cars', JSON.stringify(cars));
// };


