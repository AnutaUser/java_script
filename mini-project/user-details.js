let url = new URL(location.href);
let idOfUser = url.searchParams.get('id');


fetch('https://jsonplaceholder.typicode.com/users/' + idOfUser)
    .then(users => users.json())
    .then(users => {
        const divDetails = document.createElement('div');
        divDetails.classList.add('divDetails');
        divDetails.innerHTML = (`
            <h3 class="userDetails">Id: ${users.id}</h3> 
            <h2 class="userDetails">Name: ${users.name}</h2>
            <p class="userDetails">Username: ${users.username}</p>
            <p class="userDetails">Email: ${users.email}</p>
            <p class="userDetails">Address:
                <div>
                    <p class="userDetailsAddress">Street: ${users.address.street}</p>
                    <p class="userDetailsAddress">Suite: ${users.address.suite}</p>
                    <p class="userDetailsAddress">City: ${users.address.city}</p>
                    <p class="userDetailsAddress">Zipcode: ${users.address.zipcode}</p>
                    <p class="userDetailsAddress">Geo:
                        <p class="userDetailsAddressGeo">Lat: ${users.address.geo.lat}</p>
                        <p class="userDetailsAddressGeo">Lng: ${users.address.geo.lng}</p>
                    </p>
                </div>
            </p>
            <p class="userDetails">Phone: ${users.phone}</p>
            <p class="userDetails">Website: ${users.website}</p>
            <p class="userDetails">Company:
                <p class="userDetailsAddress">Name: ${users.company.name}</p>
                <p class="userDetailsAddress">CatchPhrase: ${users.company.catchPhrase}</p>
                <p class="userDetailsAddress">Bs: ${users.company.bs}</p>
            </p>
        `);
        const btnPosts = document.createElement('button');
        btnPosts.classList.add('btnPosts');
        btnPosts.innerText = 'Post of current user';
        divDetails.append(btnPosts);
        btnPosts.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/users/' + users.id + '/posts')
                .then(posts => posts.json())
                .then(posts => {
                    const divAllPosts = document.createElement('div');
                    divAllPosts.classList.add('divAllPosts');
                    for (const post of posts) {
                        const divPost = document.createElement('div');
                        divPost.classList.add('divPost');
                        divPost.innerHTML = `<h3>Title: ${post.title}</h3>`;
                        const btnPostsDetails = document.createElement('button');
                        btnPostsDetails.classList.add('btnPostsDetails');
                        btnPostsDetails.innerText = 'Post details';
                        btnPostsDetails.onclick = () => {
                            location.href = 'post-details.html?id=' + post.id;
                        }
                        divPost.appendChild(btnPostsDetails);
                        divAllPosts.appendChild(divPost)
                        divDetails.appendChild(divAllPosts);
                    }
                })
            btnPosts.disabled = true;
        };

        document.body.appendChild(divDetails);
    })

// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//