// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let helloWorld= 'hello world';
// let loremIpsum= 'lorem ipsum';
// let jS='javascript is cool';
// console.log(jS.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let helloWorld = 'hello world';
// let loremIpsum = 'lorem ipsum';
// let jS = 'javascript is cool';
// console.log(helloWorld.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let helloWorld = 'HELLO WORLD';
// let loremIpsum = 'LOREM IPSUM';
// let jS = 'JAVASCRIPT IS COOL';
// console.log(jS.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.length);
// console.log(str.trim().length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray(array) {
//     let arr = array.split(' ');
//     return arr
// }
// console.log(stringToarray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let arr2=array.map((arr)=>arr.toString());
// console.log(arr2);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// function sortNums(array, arg) {
//     if (arg === 'ascending') {
//         console.log(array.sort((a, b) => a - b));
//     } else if (arg === 'descending') {
//         console.log(array.sort((a, b) => b - a));
//     } else if (arg !== 'ascending' || arg !== 'descending') {
//         console.log('push arg')
//     }
// }
// sortNums(nums, 'ascending')

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => {
//     if (a.monthDuration > b.monthDuration) {
//         return -1
//     }
//     if (b.monthDuration > a.monthDuration) {
//         return 1
//     }
//     return 0
// }));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// const courses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(courses);

// описати колоду карт
// let cards = [
//     {cardSuit: 'spade', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: '6', color: 'black'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'red'},
//     {cardSuit: 'diamond', value: '7', color: 'black'},
//     {cardSuit: 'heart', value: '7', color: 'red'},
//     {cardSuit: 'clubs', value: '7', color: 'black'},
//     {cardSuit: 'spade', value: '8', color: 'red'},
//     {cardSuit: 'diamond', value: '8', color: 'black'},
//     {cardSuit: 'heart', value: '8', color: 'red'},
//     {cardSuit: 'clubs', value: '8', color: 'black'},
//     {cardSuit: 'spade', value: '9', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'black'},
//     {cardSuit: 'heart', value: '9', color: 'red'},
//     {cardSuit: 'clubs', value: '9', color: 'black'},
//     {cardSuit: 'spade', value: '10', color: 'red'},
//     {cardSuit: 'diamond', value: '10', color: 'black'},
//     {cardSuit: 'heart', value: '10', color: 'red'},
//     {cardSuit: 'clubs', value: '10', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'red'},
//     {cardSuit: 'diamond', value: 'ace', color: 'black'},
//     {cardSuit: 'heart', value: 'ace', color: 'red'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'red'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'heart', value: 'jack', color: 'red'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'red'},
//     {cardSuit: 'diamond', value: 'queen', color: 'black'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: 'king', color: 'black'},
//     {cardSuit: 'heart', value: 'king', color: 'red'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
// ]

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// - знайти піковий туз
// let aceSpade = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
// console.log(aceSpade);

// // - всі шістки
// console.log(cards.filter(card => card.value === '6'));

// - всі червоні карти
// console.log(cards.filter(card=>card.color==='red'));

// - всі буби
// console.log(cards.filter(card=>card.cardSuit==='diamond'))

// - всі трефи від 9 та більше
// console.log(cards.filter(card => card.cardSuit === 'clubs').filter(card2 =>
//     card2.value !=='6'&&card2.value !=='7'&&card2.value !=='8'));


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі
// карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let card = cards.reduce(function (accumulator, card) {
//     if (card.cardSuit === 'spade') {
//         accumulator.spades.push(card);
//     } else if (card.cardSuit === 'diamond') {
//         accumulator.diamonds.push(card);
//     } else if (card.cardSuit === 'heart') {
//         accumulator.hearts.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card);
//     }
//     return accumulator
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
// console.log(card);