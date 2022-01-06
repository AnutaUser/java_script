let url = new URL(location.href);
let idOfPost = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/posts/' + idOfPost)
    .then(posts => posts.json())
    .then(posts => {
        const divPostDetails = document.createElement('div');
        divPostDetails.classList.add('divPostDetails');
        divPostDetails.innerHTML = (`
            <h3>Id: ${posts.id}</h3> 
            <h2>Title: ${posts.title}</h2>
            <p>Body: ${posts.body}</p>
            `);
        const btnComments = document.createElement('button');
        btnComments.classList.add('btnComments');
        btnComments.innerText = 'Comments';
        btnComments.onclick = (userId) => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(comments => comments.json())
                .then(comments => {
                    const divAllComments = document.createElement('div');
                    divAllComments.classList.add('divAllComments');
                    for (const comment of comments) {
                        if (posts.id === comment.postId) {
                            let divComment = document.createElement('div');
                            divComment.classList.add('divComment');
                            divComment.innerHTML = `
                                <h3>Id: ${comment.id}</h3>
                                <h2>Name: ${comment.name}</h2>
                                <p>Email: ${comment.email}</p>
                                <p>Body: ${comment.body}</p>
                            `;
                            divAllComments.appendChild(divComment);
                            divPostDetails.appendChild(divAllComments);
                        }
                    }
                })
            btnComments.disabled = true;
        };
        divPostDetails.appendChild(btnComments);
        document.body.appendChild(divPostDetails);
    });

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
