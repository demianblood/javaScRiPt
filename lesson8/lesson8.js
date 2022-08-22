// - Створити функцію конструктор для об'єктів User з полями
// id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// for (let i = 0; i < 10; i++) {
//     users[i] = new User(i, 'dwfs', 'afds', 'dwfsfds@dwfs', +1151436545)
// }

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(user => user.id % 2 === 0&& user.id!==0));

// - Взяти масив з  User[] з попереднього завдання,
// та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями
// id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
//     }
// створити пустий масив, наповнити його 10 об'єктами Client
// let clients=[];
// for (let i = 0; i <10; i++) {
//     clients[i]=new Client(i,'dssvfd','dsfsd','sdfs@dsf',+264635213,['dwfwsd','dwfdf','dfwsfdw'])
//     if (i===3){
//         clients[i]=new Client(i,'dssvfd','dsfsd','sdfs@dsf',+264635213,['dwfwsd','dwfdf','dfwsfdw','dscdfs'])
//     }
// };

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль
// `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль
// в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) -
// яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed) {
//
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//
//
//     this.drive = function drive() {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info = function info() {
//         console.log(`model:${model}, producer:${producer}, year:${year}, maxSpeed:${maxSpeed}`)
//     }
//
//     this.increaseMaxSpeed = function increaseMaxSpeed(newSpeed) {
//         maxSpeed = maxSpeed + newSpeed
//     }
//
//     this.changeYear = function changeYear(newValue) {
//         year = newValue
//     }
//
//     this.addDriver = function addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let car = new Car('minor', 'bmv', 2019, 230);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, producer, year, maxSpeed) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`model:${this.model}, producer:${this.producer}, year:${this.year}, maxSpeed:${this.maxSpeed}`)
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
// }
//
// let car = new Car('minor', 'bmv', 2019, 230);
// car.addDriver('vasya')
// console.log(car)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// class Cinderella {
//     constructor(cinderName, age, size) {
//         this.cinderName = cinderName;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let cinderellasList = [
//     cinderella1 = new Cinderella('cin1', 18, 39),
//     cinderella2 = new Cinderella('cin2', 17, 37),
//     cinderella3 = new Cinderella('cin3', 19, 40),
//     cinderella4 = new Cinderella('cin4', 16, 41),
//     cinderella5 = new Cinderella('cin5', 12, 35),
//     cinderella6 = new Cinderella('cin6', 15, 39),
//     cinderella7 = new Cinderella('cin7', 17, 38),
//     cinderella8 = new Cinderella('cin8', 18, 39),
//     cinderella9 = new Cinderella('cin9', 19, 40),
//     cinderella10 = new Cinderella('cin10', 17, 41)
// ]
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let prince = new Prince('borya', 19, 37)
// for (let i = 0; i < cinderellasList.length; i++) {
//     if (cinderellasList[i].size===prince.shoe){
//         console.log(cinderellasList[i])
//     }
// }
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let truCinderella = cinderellasList.find(value => value.size === prince.shoe);
// console.log(truCinderella);