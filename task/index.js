// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
            let mainDiv = document.createElement('div');
            mainDiv.classList.add('mainBox')
            document.body.appendChild(mainDiv);
            for (let i = 0; i < users.length; i++) {
                const usersDiv = document.createElement('div');
                usersDiv.classList.add('box');

                const userInfo = document.createElement('h4');
                userInfo.innerHTML = `User id: ${users[i].id}. <br> Name: ${users[i].name} `


                const button = document.createElement('a');
                button.href = `user-details.html?id=${users[i].id}`
                button.innerText = 'get information';
                button.classList.add('button');

                usersDiv.append(userInfo, button);
                mainDiv.appendChild(usersDiv);
            }
        }
    )
