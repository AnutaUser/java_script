// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// Зробити кнопку до кожного поста, при кліку на яку виводяться в окремий блок всі
// коментарі поточного поста
let divElement = document.createElement('div');
divElement.classList.add('wrap');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let divPosts = document.createElement('div');
            divPosts.classList.add('posts');
            divPosts.innerHTML = `
            <h4>ID: ${post.id}</h4>           
            <h3>Title: ${post.title}</h3>
            <p>Body: ${post.body}</p>`;

            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = 'See comments';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(posts => posts.json())
                    .then(comments => {
                        for (const comment of comments) {
                            if (post.id === comment.postId) {
                                let divComments = document.createElement('div');
                                divComments.classList.add('comments')
                                divComments.innerHTML = `
                                    <h4>ID: ${comment.id}</h4>           
                                    <h2>Name: ${comment.name}</h2>
                                    <h3>email: ${comment.email}</h3>
                                    <p>Body: ${comment.body}</p>`;
                                divPosts.append(divComments);
                            }
                            button.disabled = true;
                        }
                    })
            }
            divPosts.append(button);
            divElement.append(divPosts);
        }
    });
document.body.appendChild(divElement);