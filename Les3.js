//-- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let dog = {nickname: 'Lessi',
//         species: 'collie',
//         color: 'white',
//         age: 1,
//         weight: '20 kg'}
// let user = {name: 'Ivan',
//         age: 33,
//         isMerried: true, 
//         hasCar: true,
//         position: 'Project manager'}
// let car = {model: 'Toyota Corolla',
//         year_issue: 2004,
//         power: 89,
//         engine: 1.8,
//         color: 'silver'
//         }
// let flat = {region: 'Shevchenkovsky',
//         num_rooms: 3,
//         squary: 67,
//         floor: 4,
//         hasLift: false}
// let book = {autor: 'Эдит Ева Эгер',
//         name: 'Выбор',
//         pages: 344,
//         year: 2019,
//         language: 'ru'}

// task 2
// Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// // - з 5 автомобілів
//  let dogs = ['Дружок', 'Шарик', 'Лора', 'Умка', 'Арчи']
//  let humans = ['Ivan', 'Natalia', 'Tom', 'Gali', 'Vova']
//  let cars = ['Lexus', 'Toyota', 'Daowoo', 'Ford', 'Opel']

 // task 3
 //створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// // - сумка
// let house = {kind: '',
//         floor: 2,
//         rooms: 5,
//         add: {hasEarth: true},
//         material: ['brick', 'tree']}
// let driver = {name: 'Ivan',
//         last_name: 'Ivanov',
//         age: 43,
//         class: ['B','D'],
//         car: {model: 'Renault Laguna'}}
// let toy = {name: 'Lego',
//         type: ['constructor', 'pazzle'],
//         year: 2018,
//         age: '12+',
//         series: {name: 'ships'}}
// let table = {type: 'kitchen',
//         material:['tree', 'MDF', 'glass'],
//         color: 'white',
//         num_legs: 6,
//         add: {height_sm: 76}}
// let beg = {model: 'shopper',
//         type: ['every day', 'for road', 'for training'],
//         material: {name: 'cloth'},
//         height: '45sm',
//         width: '33sm' }

// task 4
// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// for (let i = 0; i < users.length; i++){   
//     let str = '';
//     if (users[i].name === 'andrey' || users[i].name === 'max'){
//         // console.log(users[i].status);
//         str =  users[i].status;
//     }
//     if (i === users.length -1 || i === 2){
//         // console.log(users[i].name);
//         str = users[i].name
//     }
//     if (users[i].name === 'oleg' || users[i].name === 'olya'){
//         str = users[i].age;
//     }
//     if (i === 4) {
//         str = users[i].name + '  age ' + users[i].age
//     }
//      if (users[i].name === 'anya'){
//          str = users[i].age + '  ' + users[i].status
//      }
//     console.log(str)
// }
//
