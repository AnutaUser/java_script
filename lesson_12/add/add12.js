// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок
//     виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок
//     виводяться всі коментарі поточного поста
let divContainer = document.createElement('div');
divContainer.classList.add('container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            let divUsers = document.createElement('div');
            divUsers.classList.add('users');
            divUsers.innerHTML = `
            <h3>ID: ${user.id}</h3>
            <h2>Name: ${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <div>Address: 
                <p class="users-address">Street: ${user.address.street}</p>
                <p class="users-address">Suite: ${user.address.suite}</p>
                <p class="users-address">City: ${user.address.city}</p>
                <p class="users-address">Zipcode: ${user.address.zipcode}</p>
                <p class="users-address">Geo: </p>
                    <p class="users-address-geo">Lat: ${user.address.geo.lat}</p>
                    <p class="users-address-geo">Lng: ${user.address.geo.lng}</p>
                </div>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company:</p> 
                <p class="users-company">Name: ${user.company.name}</p>
                <p class="users-company">CatchPhrase: ${user.company.catchPhrase}</p>
                <p class="users-company">Bs: ${user.company.bs}</p>
                `;

            let btnPosts = document.createElement('button');
            btnPosts.classList.add('btn');
            btnPosts.innerText = 'Oll posts';
            btnPosts.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                .then(posts => posts.json())
                .then(posts => {
                    for (const post of posts) {
                        if (user.id === post.userId){
                            let divPosts = document.createElement('div');
                            divPosts.classList.add('posts');
                            divPosts.innerHTML = `
                                <h3>Id: ${post.id}</h3>
                                <h2>Title: ${post.title}</h2>
                                <p>Body: ${post.body}</p>`;
                            let button = 'button';
                            let btnComments = document.createElement(button);
                            btnComments.classList.add('btn');
                            btnComments.innerText = 'See comments';
                            btnComments.onclick = (userId) => {
                                fetch('https://jsonplaceholder.typicode.com/posts/' + post.userId + '/comments')
                                    .then(comments => comments.json())
                                    .then(comments => {
                                        for (const comment of comments) {
                                            if (post.userId === comment.postId) {
                                                let divComments = document.createElement('div');
                                                divComments.classList.add('comments');
                                                divComments.innerHTML = `
                                                    <h3>Id: ${comment.id}</h3>
                                                    <h2>Name: ${comment.name}</h2>
                                                    <p>Email: ${comment.email}</p>
                                                    <p>Body: ${comment.body}</p>`;
                                                divPosts.append(divComments);
                                            }
                                            btnComments.disabled = true;
                                        }
                                    })
                            }
                            btnPosts.disabled = true;
                            divPosts.append(btnComments);
                            divUsers.append(divPosts);
                        }
                    }
                })
            }
            divUsers.append(btnPosts);
            divContainer.append(divUsers);
        }
    });
document.body.append(divContainer);