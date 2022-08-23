// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву
// <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок
//     та наповнити його інформацією з цього об'єкту
// for (let i = 0; i < simpsons.length; i++) {
//     document.write(
//         `<div class='member'>
//     <h4>${simpsons[i].name} ${simpsons[i].surname} age: ${simpsons[i].age}</h4>
//     <img src="${simpsons[i].photo}"/>
//     <p>${simpsons[i].info}</p>
//     </div>`
//     )
// }

// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react',
//             'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок,
// блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
// const body = document.getElementsByTagName('body');
//
// for (let i = 0; i < coursesArray.length; i++) {
// let mainDiv = document.createElement('div');
// mainDiv.classList.add('box');
// document.body.appendChild(mainDiv);
//
//     let titleDiv = document.createElement('div');
//     titleDiv.classList.add('border');
//     titleDiv.classList.add('title');
//
//         let h3Title = document.createElement('h3');
//         h3Title.innerText = `${coursesArray[i].title}`;
//         titleDiv.appendChild(h3Title)
//
//     let durationDiv = document.createElement('div');
//     durationDiv.classList.add('duration');
//
//         let monthDiv = document.createElement('div');
//         monthDiv.classList.add('border');
//         monthDiv.classList.add('monthDuration');
//         durationDiv.appendChild(monthDiv);
//
//             let h5Month= document.createElement('h5');
//             h5Month.innerText = `Month Duration : ${coursesArray[i].monthDuration}`
//             monthDiv.appendChild(h5Month);
//
//         let hoursDiv = document.createElement('div');
//         hoursDiv.classList.add('border');
//         hoursDiv.classList.add('hoursDuration');
//         durationDiv.appendChild(hoursDiv);
//
//             let h5Hours = document.createElement('h5');
//             h5Hours.innerText=`Hours Duration : ${coursesArray[i].hourDuration} `;
//             hoursDiv.appendChild(h5Hours);
//
//     let modulesDiv = document.createElement('div');
//     modulesDiv.classList.add('border');
//     modulesDiv.classList.add('modules');
//
//         let ul=document.createElement('ul');
//         modulesDiv.appendChild(ul);
//
//             for (let j = 0; j < coursesArray[i].modules.length; j++) {
//                 let li = document.createElement('li');
//                 li.classList.add('modulesItem');
//                 li.classList.add('border');
//                 li.innerText = `${coursesArray[i].modules[j]}`
//                 ul.appendChild(li);
//             }
//
//     mainDiv.appendChild(titleDiv);
//     mainDiv.appendChild(durationDiv);
//     mainDiv.appendChild(modulesDiv);
// }


//     - створити блок,
// let body = document.body
// let div = document.createElement('div');
// //     - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.backgroundColor='red';
// div.style.color ='blue';
// div.style.fontSize = '18px';
// // - додати цей блок в body.
// body.appendChild(div);
// // - клонувати його повністю, та додати клон в body.
// let div2=div.cloneNode();
// body.appendChild(div2)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let info = ['Main', 'Products', 'About us', 'Contacts'];
// let ulMenu = document.getElementsByClassName('menu')[0];
// for (let i = 0; i < info.length; i++) {
//     let li = document.createElement('li');
//     li.innerText = `${info[i]}`;
//     ulMenu.appendChild(li);
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
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let body = document.body;
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div = document.createElement('div');
//
//     let title = document.createElement('h3');
//     title.innerText = `${coursesAndDurationArray[i].title}`
//     div.appendChild(title);
//
//     let monthDuration = document.createElement('h3');
//     monthDuration.innerText = `${coursesAndDurationArray[i].monthDuration}`
//     div.appendChild(monthDuration);
//
//     body.appendChild(div)
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
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let body = document.body;
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let title = document.createElement('h1');
//     title.classList.add('heading');
//     title.innerText = `${coursesAndDurationArray[i].title}`
//     div.appendChild(title);
//
//     let monthDuration = document.createElement('p');
//     monthDuration.classList.add('description')
//     monthDuration.innerText = `${coursesAndDurationArray[i].monthDuration}`
//     div.appendChild(monthDuration);
//
//     body.appendChild(div)
// }

//     - Створити довільний елемент з id = text.
//     Використовуючи JavaScript, зробіть так, щоб при натисканні на
//     кнопку зникав елемент з id="text".
// let button = document.createElement('button');
// let div =document.getElementById('text');
// document.body.appendChild(button);
//
// button.onclick= function () {
//     div.style.display = 'none';
// }

//     - створити інпут який приймає вік людини та
//     кнопку яка підтверджує дію.При натисканні на кнопку
//     зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
// let input = document.createElement('input');
// input.type = 'number';
//
// let button = document.createElement('button');
// button.innerText = 'Click';
//
// button.onclick = ()=>{
//     if (input.value>0 && input.value<18||input.value<0){
//         document.write('No No No')
//     }else if (input.value>18){
//         document.write('Welcome')
//     }
// }
//
// document.body.append(input,button)


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let div = document.createElement('div');
// const trInput = document.createElement('input');
// trInput.type = 'number';
//
// const tdInput = document.createElement('input');
// tdInput.type = 'number';
//
// const valueInput = document.createElement('input');
// valueInput.type = 'text';
//
// const button = document.createElement('button');
// button.innerText = 'Click';
// div.append(trInput, tdInput, valueInput, button);
//
// document.body.append(div);
//
// button.addEventListener('click', function () {
//     let tr = trInput.value;
//     let td = tdInput.value;
//     let value = valueInput.value;
//
//     let construct = (tr, td, value) => {
//         const table = document.createElement('table');
//
//         for (let i = 0; i < tr; i++) {
//             const row = document.createElement('tr');
//             table.appendChild(row);
//             for (let j = 0; j < td; j++) {
//                 const cell = document.createElement('td');
//                 cell.style.border = '1px solid black';
//                 cell.innerText = value;
//                 row.appendChild(cell);
//             }
//
//         }
//         document.body.appendChild(table);
//
//     }
//     construct(tr, td, value)
// })