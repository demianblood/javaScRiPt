// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function pryamokutnik(a,b) {
//     return a*b
// }

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// //
// // function kola (r) {
// //     return Math.pow(r,2)*3.14
// }

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function zulindr(h,r) {
//     return 2*3.14*h*r
// }

// - створити функцію яка приймає масив та виводить кожен його елемент
// function array(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

// - створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
// function paragrph(text) {
//     document.write(`<p>${text}</p>`)
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulLi(li) {
//     document.write('<ul>')
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${li}</li>`)
//     }
//     document.write('</ul>')
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liUl(li,number) {
//     document.write('<ul>');
//     for (let i = 0; i < number ; i++) {
//         document.write(`<li>${li}</li>`)
//     }
//     document.write('</ul>')
// }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function elementiv(array) {
//     document.write('<ul>');
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write('</ul>')
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function block(array) {
//     for (const arrayElement of array) {
//         document.write('<div>');
//         document.write(`id: ${arrayElement.id} </br>`)
//         document.write(`name: ${arrayElement.name} </br>`)
//         document.write(`age: ${arrayElement.age} </br>`)
//         document.write('</br>')
//         document.write('</div>');
//     }
// };

// - створити функцію яка повертає найменьше число з масиву
// function minimum(array) {
//     let min = '';
//     for (let i = 0; i < array.length; i++) {
//         if (min === '') {
//             min = array[i]
//         } else if (min > array[i]) {
//             min = array[i]
//         }
//     }
//     console.log(min)
// }
// minimum([1, 2, 0, -3, 5])

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву
// та повертає його. Приклад [1,2,10]->13
// function sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "number")
//             sum = sum + array[i]
//     }
//     console.log(sum)
// }
//
// sum([1, 3, 5, 6])