// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
const url = new URL(location.href);
const id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('box');

        const userInfo = document.createElement('h4');
        userInfo.innerHTML =
            `<p> User id: ${user.id}.
            <br> Name: ${user.name}
            <br> UserName: ${user.username}
            <br> Email: ${user.email}
            <br> Adress: street ${user.address?.street} ${user.address?.suite}
            <br> City: ${user.address?.city} , ${user.address?.zipcode}
               </p>
               <p>
               Contacts:
              <br>Phone: ${user.phone}
              <br>Website: ${user.website}
               </p> 
                <p>
                Work Company: ${user.company?.name}
                <br> Phrase: ${user.company?.catchPhrase}
                </p>`;

        const button = document.createElement('button');
        button.innerText = "post of current user";
        button.classList.add('titleButton');
        button.onclick = function () {
            let postsDiv = document.createElement('div');
            postsDiv.classList.add('box', 'postsDiv');

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts/`)
                .then((response) => response.json())
                .then(posts => {
                        for (let i = 0; i < posts.length; i++) {
                            let titleDiv = document.createElement('div');
                            titleDiv.classList.add('titleDiv');

                            let titlePost = document.createElement('p');
                            titlePost.classList.add('title')
                            titlePost.innerText = `${posts[i].title}`

                            let postButton = document.createElement('a');
                            postButton.href = `post-details.html?id=${posts[i].id}`
                            postButton.innerText = 'get post';
                            postButton.classList.add('button');

                            titleDiv.append(titlePost, postButton);
                            postsDiv.append(titleDiv);
                        }
                    }
                )

            document.body.append(postsDiv);
        }

        mainDiv.append(userInfo, button)
        document.body.append(mainDiv);
    })


