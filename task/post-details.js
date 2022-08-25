// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
        let mainDiv = document.createElement('div');

        let postDiv = document.createElement('div');
        postDiv.classList.add('box');
        postDiv.innerHTML = `
        UserId: ${post.userId}, postId: ${post.id} ;
        <br>
        Title: ${post.title};
        <br>
        ${post.body};`

        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('box', 'commentsDiv');

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(comments => {
                for (let i = 0; i < comments.length; i++) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment')
                    commentDiv.innerHTML = `
                  <p>
                  Comment name: ${comments[i].name}
                  <br>
                  <br>
                  Email: ${comments[i].email}
                  <br>
                  <br>
                  " ${comments[i].body} "
                  </p>
                  `;
                    commentsDiv.append(commentDiv);
                }
            })


        mainDiv.append(postDiv, commentsDiv);
        document.body.append(mainDiv);
    })

