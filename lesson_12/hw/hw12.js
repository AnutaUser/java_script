// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// let div = document.createElement('div');
// div.classList.add('wrap');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for (const post of posts) {
//             let divElement = document.createElement('div');
//             divElement.classList.add('element');
//             divElement.innerHTML =`
//             <h5>Id: ${post.id}</h5>
//             <h3>Title: ${post.title}</h3>
//             <p>Body: ${post.body}</p>`;
//
//             div.appendChild(divElement);
//         }
//     })
// document.body.appendChild(div);

//     2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

let divElement = document.createElement('div');
divElement.classList.add('container');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let div = document.createElement('div');
            div.classList.add('box');

            let h5 = document.createElement('h5');
            h5.innerText = `Id: ${comment.id}`;

            let h3 = document.createElement('h3');
            h3.innerText = `Name: ${comment.name}`;

            let h4 = document.createElement('h4');
            h4.innerText = `Email: ${comment.email}`;

            let p = document.createElement('p');
            p.innerText = `Body: ${comment.body}`;

            // div.innerHTML = `
            //     <h5>Id: ${comment.id}</h5>
            //     <h3>Name: ${comment.name}</h3>
            //     <h4>Email: ${comment.email}</h3>
            //     <p>Body: ${comment.body}</p>`;
            h3.onclick = () => {
                h4.classList.toggle('hidden');
                p.classList.toggle('hidden');
            };
            div.append(h5, h3, h4, p);
            divElement.append(div);
        }
    });
document.body.append(divElement);