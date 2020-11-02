// task 1
// // создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user = { name: 'Tom',
//             last_name: 'Jeckerson',
//             age: 30};
// let adress = { country: 'Germany',
//             city: 'Berlin',
//             street: 'Hardenbergstrasse'};
// let car = { produce: 'BMW',
//             model: 'x5',
//             year: 2018};
// let fruits = {name: 'Apple',
//             kind: 'tree',
//             color: 'yellow'};
// let table = {view: 'kitchen',
//             material: 'tree',
//             num_legs: 4};


// task 2
//создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... 
// let cars = { produce: 'BMW',
//             model:['i3', 'x5'],
//             year: {year_of_issue: 2015}};
// let telefons = {name: 'Samsung',
//                 screen: ['6.1"', '6.7"'],
//                 memory: {rom_gb: 128}};
// let furniture = { type: 'table',
//                 form: ['squery', 'tringle'],
//                 material: {name: 'MDF'}};
// let vegetable = {name: 'potato',
//                 method_cook: ['fry', 'boiled'],
//                 weight: {kg: 0.5}}
// let pensils = { color:'silver',
//                 type: ['colors', 'simple'],
//                 firmness: {B: true}}


// task 3
// При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const value in user){
//     console.log(value)
// }
// for (const value in adress){
//     console.log(value)
// }
// for (const k in car){
//     console.log(k)
// }
// for (const f in fruits){
//     console.log(f)
// }
// for (const tb in table){
//     console.log(tb)
// }
// for (const cs in cars){
//     console.log(cs)
// }
// for (const tl in telefons){
//     console.log(tl)
// }
// for (const fr in furniture){
//     console.log(fr)
// }
// for (const vt in vegetable){
//     console.log(vt)
// }
// for (const pn in pensils){
//     console.log(pn)
// }


// task 4
//При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let key_user = Object.keys(user)
// console.log(key_user)

// let key_adress = Object.keys(adress)
// console.log(key_adress)

// let key_car = Object.keys(car)
// console.log(key_car)

// let key_fruits = Object.keys(fruits)
// console.log(key_fruits)

// let key_table = Object.keys(table)
// console.log(key_table)

// let key_cars = Object.keys(cars)
// console.log(key_cars)

// let key_telefons = Object.keys(telefons)
// console.log(key_telefons)

// let key_furniture = Object.keys(furniture)
// console.log(key_furniture)

// let key_vegetable = Object.keys(vegetable)
// console.log(key_vegetable)

// let key_pensils = Object.keys(pensils)
// console.log(key_pensils)


// task 5
//Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// let arr_cars = [{model: 'Ford Edge',
//                 year_issue: 2012,
//                 power: 120,
//                 color: 'blue'
//             },
//                 {model: 'BMW x5',
//                 year_issue: 2013,
//                 power: 394,
//                 color: 'white'
//             },
//                 {model: 'Audi a8',
//                 year_issue: 2001,
//                 power: 310,
//                 color: 'silver'
//             },
//                 {model: 'Daowoo Lanos',
//                 year_issue: 2010,
//                 power: 108,
//                 color: 'green'
//             },
//                 {model: 'Opel Omega',
//                 year_issue: 1994,
//                 power: 96,
//                 color: 'dark-blue'
//             },
//                 {model: 'Chevrolet Aaveo',
//                 year_issue: 2003,
//                 power: 126,
//                 color: 'red'
//             },
//                 {model: 'Skoda Octavia',
//                 year_of_issue: 2009,
//                 power: 108,
//                 color: 'black'
//             },
//                 {model: 'Toyota Corlla',
//                 year_issue: 2004,
//                 power: 89,
//                 color: 'silver'
//             },
//                 {model: 'Toyota Rav4',
//                 year_issue: 2006,
//                 power: 177,
//                 color: 'black'
//             },
//                 {model: 'Ford Fiesta',
//                 year_issue: 2012,
//                 power: 100,
//                 color: 'red'}]
// task 6
// //Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [{name: 'Kyiv',
//             population: 2960000,
//             country: 'Ukraine',
//             region: 'Kyivskyi '
//         },
//             {name: 'Dnipro',
//             population: 993000,
//             country: 'Ukraine',
//             region: 'Dniprovskyi'
//         },
//             {name: 'Berlin',
//             population: 3644000,
//             country: 'Germany',
//             region: 'Berline'
//         },
//             {name: 'Monacum',
//             population: 1471000,
//             county: 'Germany',
//             region: 'Bavaria'
//         },
//             {name: 'Paris',
//             population: 2148000,
//             country: 'France',
//             region: 'Il de France'}
// ]


// task 7
// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж. 
// let cars = [{model: 'Ford Edge',
//                 year_issue: 2012,
//                 power: 120,
//                 color: 'blue',
//                 driver: {name: 'Oleg',
//                         age: 37,
//                         sex: 'male',
//                         experience: 15}
//             },
//                 {model: 'BMW x5',
//                 year_issue: 2013,
//                 power: 394,
//                 color: 'white',
//                 driver: {name: 'Slavik',
//                         age: 34,
//                         sex: 'male',
//                         experience: 7}
//             },
//                 {model: 'Audi a8',
//                 year_issue: 2001,
//                 power: 310,
//                 color: 'silver',
//                 driver: {name: 'Andrey',
//                         age: 28,
//                         sex: 'male',
//                         experience: 3}
//             },
//                 {model: 'Daowoo Lanos',
//                 year_issue: 2010,
//                 power: 108,
//                 color: 'green',
//                 driver: {name: 'Ira',
//                         age: 35,
//                         sex: 'female',
//                         experience: 8}
//             },
//                 {model: 'Opel Omega',
//                 year_issue: 1994,
//                 power: 96,
//                 color: 'dark-blue',
//                 driver: {name: 'Ivan',
//                         age: 42,
//                         sex: 'male',
//                         experience: 20}
//             },
//                 {model: 'Chevrolet Aaveo',
//                 year_issue: 2003,
//                 power: 126,
//                 color: 'red',
//                 driver: {name: 'Olga',
//                         age: 29,
//                         sex: 'female',
//                         experience: 1}
//             },
//                 {model: 'Skoda Octavia',
//                 year_of_issue: 2009,
//                 power: 108,
//                 color: 'black',
//                 driver: {name: 'Viktor',
//                         age: 31,
//                         sex: 'male',
//                         experience: 10}
//             },
//                 {model: 'Toyota Corolla',
//                 year_issue: 2004,
//                 power: 89,
//                 color: 'silver',
//                 driver: {name: 'Elena',
//                         age: 30,
//                         sex: 'female',
//                         experience: 5}
//             },
//                 {model: 'Toyota Rav4',
//                 year_issue: 2006,
//                 power: 177,
//                 color: 'black',
//                 driver: {name: 'Maxim',
//                         age: 36,
//                         sex: 'male',
//                         experience: 7}
//             },
//                 {model: 'Ford Fiesta',
//                 year_issue: 2012,
//                 power: 100,
//                 color: 'red',
//                 driver: {name: 'Natalia',
//                         age: 26,
//                         sex: 'female',
//                         experience: 2}}]

// task 8
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < arr_cars.length){
//     console.log(arr_cars[i]);
//     i++;
// }
// let y = 0;
// while (y < cities.length){
//     console.log(cities[y]);
//     y++;
// }

// let z = 0;
// while(z < cars.length){
//     console.log(cars[z]);
//     z++;
// }


// task 9
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let i = 0; i < arr_cars.length; i++){
//     console.log(arr_cars[i])
// }

// for (let i = 0; i < cities.length; i++){
//     console.log(cities[i])
// }

// for (let i =0; i < cars.length; i++){
//     console.log(cars[i])
// }


// task 10
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for(const val of arr_cars){
//     console.log(val);
// }

// for (const iter of cities){
//     console.log(iter);
// }

// for (const val of cars){
//     console.log(val);
// }


// task 11
// - взять объекты из задания 1 и превратить каждый в json.
// let user = { name: 'Tom',
//             last_name: 'Jeckerson',
//             age: 30};
// let adress = { country: 'Germany',
//             city: 'Berlin',
//             street: 'Hardenbergstrasse'};
// let car = { produce: 'BMW',
//             model: 'x5',
//             year: 2018};
// let fruits = {name: 'Apple',
//             kind: 'tree',
//             color: 'yellow'};
// let table = {view: 'kitchen',
//             material: 'tree',
//             num_legs: 4};

// let j_user = JSON.stringify(user);
// let j_adress = JSON.stringify(adress);
// let j_car = JSON.stringify(car);
// let j_fruits = JSON.stringify(fruits);
// let j_table = JSON.stringify(table);



// task 12
// - взять json из задания 11 и превратить их обратно в объекты.
// let rev_user = JSON.parse(j_user);
// let rev_adress = JSON.parse(j_adress);
// let rev_car = JSON.parse(j_car);
// let rev_fruits = JSON.parse(j_fruits);
// let rev_table = JSON.parse(j_table);


// task 13
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//  let arr_cars = [{model: 'Ford Edge',
//                 year_issue: 2012,
//                 power: 120,
//                 color: 'blue'
//             },
//                 {model: 'BMW x5',
//                 year_issue: 2013,
//                 power: 394,
//                 color: 'white'
//             },
//                 {model: 'Audi a8',
//                 year_issue: 2001,
//                 power: 310,
//                 color: 'silver'
//             },
//                 {model: 'Daowoo Lanos',
//                 year_issue: 2010,
//                 power: 108,
//                 color: 'green'
//             },
//                 {model: 'Opel Omega',
//                 year_issue: 1994,
//                 power: 96,
//                 color: 'dark-blue'
//             },
//                 {model: 'Chevrolet Aaveo',
//                 year_issue: 2003,
//                 power: 126,
//                 color: 'red'
//             },
//                 {model: 'Skoda Octavia',
//                 year_of_issue: 2009,
//                 power: 108,
//                 color: 'black'
//             },
//                 {model: 'Toyota Corlla',
//                 year_issue: 2004,
//                 power: 89,
//                 color: 'silver'
//             },
//                 {model: 'Toyota Rav4',
//                 year_issue: 2006,
//                 power: 177,
//                 color: 'black'
//             },
//                 {model: 'Ford Fiesta',
//                 year_issue: 2012,
//                 power: 100,
//                 color: 'red'}]
// for (let i = 0; i <arr_cars.length; i++){
//     console.log(JSON.stringify(arr_cars[i]))
// }


// task 14
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let cities = [{name: 'Kyiv',
//             population: 2960000,
//             country: 'Ukraine',
//             region: 'Kyivskyi '
//         },
//             {name: 'Dnipro',
//             population: 993000,
//             country: 'Ukraine',
//             region: 'Dniprovskyi'
//         },
//             {name: 'Berlin',
//             population: 3644000,
//             country: 'Germany',
//             region: 'Berline'
//         },
//             {name: 'Monacum',
//             population: 1471000,
//             county: 'Germany',
//             region: 'Bavaria'
//         },
//             {name: 'Paris',
//             population: 2148000,
//             country: 'France',
//             region: 'Il de France'}
// ]
// for (let i = 0; i < cities.length; i++){
//     console.log(JSON.stringify(cities[i]))
// }

// task 15
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let cars = [{model: 'Ford Edge',
//                 year_issue: 2012,
//                 power: 120,
//                 color: 'blue',
//                 driver: {name: 'Oleg',
//                         age: 37,
//                         sex: 'male',
//                         experience: 15}
//             },
//                 {model: 'BMW x5',
//                 year_issue: 2013,
//                 power: 394,
//                 color: 'white',
//                 driver: {name: 'Slavik',
//                         age: 34,
//                         sex: 'male',
//                         experience: 7}
//             },
//                 {model: 'Audi a8',
//                 year_issue: 2001,
//                 power: 310,
//                 color: 'silver',
//                 driver: {name: 'Andrey',
//                         age: 28,
//                         sex: 'male',
//                         experience: 3}
//             },
//                 {model: 'Daowoo Lanos',
//                 year_issue: 2010,
//                 power: 108,
//                 color: 'green',
//                 driver: {name: 'Ira',
//                         age: 35,
//                         sex: 'female',
//                         experience: 8}
//             },
//                 {model: 'Opel Omega',
//                 year_issue: 1994,
//                 power: 96,
//                 color: 'dark-blue',
//                 driver: {name: 'Ivan',
//                         age: 42,
//                         sex: 'male',
//                         experience: 20}
//             },
//                 {model: 'Chevrolet Aaveo',
//                 year_issue: 2003,
//                 power: 126,
//                 color: 'red',
//                 driver: {name: 'Olga',
//                         age: 29,
//                         sex: 'female',
//                         experience: 1}
//             },
//                 {model: 'Skoda Octavia',
//                 year_of_issue: 2009,
//                 power: 108,
//                 color: 'black',
//                 driver: {name: 'Viktor',
//                         age: 31,
//                         sex: 'male',
//                         experience: 10}
//             },
//                 {model: 'Toyota Corolla',
//                 year_issue: 2004,
//                 power: 89,
//                 color: 'silver',
//                 driver: {name: 'Elena',
//                         age: 30,
//                         sex: 'female',
//                         experience: 5}
//             },
//                 {model: 'Toyota Rav4',
//                 year_issue: 2006,
//                 power: 177,
//                 color: 'black',
//                 driver: {name: 'Maxim',
//                         age: 36,
//                         sex: 'male',
//                         experience: 7}
//             },
//                 {model: 'Ford Fiesta',
//                 year_issue: 2012,
//                 power: 100,
//                 color: 'red',
//                 driver: {name: 'Natalia',
//                         age: 26,
//                         sex: 'female',
//                         experience: 2}}]
// let new_cars = []
// for (let i = 0; i < cars.length; i++){
//     console.log(JSON.stringify(cars[i]))
//     new_cars[i] = cars[i]
// }
// console.log(new_cars)


// task 16
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{name: 'Slavik',
//             age: 28,
//             skills: ['python', 'js']},
//         {name: 'Ira',
//         age: 32,
//         skills: ['html', 'css', 'js']},
//         {name: 'Oleg',
//         age: 39,
//         skills:['java', 'spring', 'MySql']},
//         {name: 'Alex',
//         age: 45,
//         skills: ['c++', 'c#', 'java', 'spring']},
//         {name: 'Anna',
//         age: 25,
//         skills: ['js', 'html','react']}
//     ]
// for (let i = 0; i < users.length; i++){
//     console.log(users[i])
//     for (const val of users[i].skills){
//         console.log(val);
//     }
    
// }

// task 17
//- Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users = [{name: 'Slavik',
//             age: 28,
//             skills: ['python', 'js']},
//         {name: 'Ira',
//         age: 32,
//         skills: ['html', 'css', 'js']},
//         {name: 'Oleg',
//         age: 39,
//         skills:['java', 'spring', 'MySql']},
//         {name: 'Alex',
//         age: 45,
//         skills: ['c++', 'c#', 'java', 'spring']},
//         {name: 'Anna',
//         age: 25,
//         skills: ['js', 'html','react']}
//     ]
// let users_skills = []
// for (let i = 0; i < users.length; i++){
//     console.log(users[i]);
//     for (const skill of users[i].skills){
//         console.log(skill);
//         users_skills.push(skill);
//     }
// }
// console.log(users_skills);


// task 18
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//               {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//               {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//               {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//               {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let i = 0 ; i < users.length; i++){
//     console.log(users[i])
//     for (const y of users[i].skills){
//         console.log(y)
//     }
// }

// task 19
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//    			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//                         }];
// let adress = []

// for (let i in users){
//     console.log(users[i])    
//     adress.push(users[i].address)    
// }
// console.log(adress)


// task 20
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for ( let i = 0; i < users.length; i++){
//     let str = ''
//     const user_div = document.createElement('div');
//     console.log(users[i])  
//     for (const val in users[i]){
//         if (val !== 'address'){
//             str = str + ' ' + users[i][val]
//         } else{
//             for(const adr in users[i].address){
//                 str = str + ' ' + users[i][val][adr]
//             }
//         }
//     } 
//     // user_div.innerText = `${users[i].name} ${users[i].age}`
//     user_div.innerText = str
//     document.body.appendChild(user_div)
    
// }



// task 21
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (let i = 0; i < users.length; i++){
//     const div = document.createElement('div')
//     const div_name = document.createElement('div');
//     const div_age = document.createElement('div');
//     const div_status = document.createElement('div');
//     const div_adress = document.createElement('div');
//     div_name.style.fontSize = '24px'
//     div_name.style.fontWeight = '700'
//     div_name.innerText = users[i].name;
//     div_age.innerText = users[i].age;
//     div_status.innerText = users[i].status;
//     let str = ''
//     for(const adr in users[i].address){
//         str = str + ' ' + users[i].address[adr]      
//     }
//     div_adress.innerText = str
//     div.appendChild(div_name);
//     div.appendChild(div_age);
//     div.appendChild(div_status);
//     div.appendChild(div_adress);
//     document.body.appendChild(div);

// }



// task 22
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивост
// for (let i = 0; i < users.length; i++){
//     const div = document.createElement('div')
//     const div_name = document.createElement('div');
//     const div_age = document.createElement('div');
//     const div_status = document.createElement('div');
//     const div_adress = document.createElement('div');
    
//     const p_city = document.createElement('p');
//     const p_country = document.createElement('p');
//     const p_street = document.createElement('p');
//     const p_houseNum = document.createElement('p')

//     div_name.style.fontSize = '20px'
//     div_name.style.fontWeight = '700'
//     div_name.style.color = 'blue'
//     div_name.innerText = users[i].name;

//     div_age.innerText = users[i].age;
//     div_status.innerText = users[i].status;

//     div_adress.style.marginLeft = '10px'
    
//     // for(const adr in users[i].address){
//     //     switch(adr){
//     //         case 'city':
//     //             p_city.innerText = users[i].address[adr];
//     //             break;
//     //         case 'country':
//     //             p_country.innerText = users[i].address[adr];
//     //             break;
//     //         case  'street':
//     //             p_street.innerText = users[i].address[adr];
//     //             break;
//     //         case 'houseNumber':
//     //             p_houseNum.innerText = users[i].address[adr];
//     //             break;
//     //     }
       
//     // }
//     // або 
//     p_city.innerText = users[i].address['city'];
//     p_country.innerText = users[i].address['country'];
//     p_street.innerText = users[i].address['street'];
//     p_houseNum.innerText = users[i].address['houseNumber'];
//     div_adress.appendChild(p_city);
//     div_adress.appendChild(p_country);
//     div_adress.appendChild(p_street);
//     div_adress.appendChild(p_houseNum);
//     div.appendChild(div_name);
//     div.appendChild(div_age);
//     div.appendChild(div_status);
//     div.appendChild(div_adress);
//     document.body.appendChild(div);

// }

// task 23
// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив

// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, 
//                    {id: 2, name: 'petya', age: 30, status: true}, 
//                    {id: 3, name: 'kolya', age: 29, status: true},
//                    {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
//                     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//                     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//                     {user_id: 4, country: 'USA', city: 'Miami'},];
// let user_cities = [];

// for (let val_user of usersWithId){
//     for (let val_cities of citiesWithId){       
//         if (val_user.id === val_cities.user_id){
//             val_user.adress = val_cities;
//         }
//         user_cities.push(val_user)
//     }
// }
// console.log(usersWithId);


// task 24
//  створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let elem_id = document.getElementById('content');
// let elem_class = document.body.getElementsByClassName('fc bp');
// let elem_tag = document.getElementsByTagName('li');

// console.log(elem_id.textContent);
// for (let i of elem_class){
//     console.log(i.textContent);
// }
// for (let i of elem_tag){
//     console.log(i.textContent);
// }

// task 25
// - змінити цей текст використовуючи селектори id, class,  tag



//task 26
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let elem_id = document.getElementById('content');
// let elem_class = document.body.getElementsByClassName('fc bp');
// let elem_tag = document.getElementsByTagName('li');

// elem_id.style.height = '100px';
// elem_id.style.width = '800px';

// for (let i of elem_class){
//     i.style.height = '150px';
//     i.style.width = '400px';    
// }

// for (let y of elem_tag){
//     y.style.height='25px';
//     y.style.width = '650px';
// }


// task 27
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const tb = document.createElement('table');
// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');

// td1.innerText = 'first;'
// td2.innerText = 'second;'
// td3.innerText = 'third;'

// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// tb.appendChild(tr);
// document.body.appendChild(tb);


// task 28
// -- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const tb = document.createElement('table');
// let tr = [];
// let td = [];
// for (let  i =0; i <10; i++){
//     tr[i] = document.createElement('tr');
//     for (let y = 0; y < 3; y++){
//         td[y] = document.createElement('td');
//         tr[i].appendChild(td[y]);
//     }
//     tb.appendChild(tr[i]);
// }

// document.body.appendChild(tb);


// task 29
//  за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const tb = document.createElement('table');
// let t_row = [];
// let t_cell = [];

// for (let i = 0; i < 10; i++){
//     t_row[i] = document.createElement('tr');
//     for (let y = 0; y < 5; y++){
//         t_cell[y] = document.createElement('td');
//         t_row[i].appendChild(t_cell[y]);
//     }
//     tb.appendChild(t_row[i]);
// }
// document.body.appendChild(tb);


// task 30
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// const table = document.createElement('table');
// let n = parseInt(prompt('Введіть кількість рядків:'));
// let m = parseInt(prompt('Введіть кількість ячеек:'));
// let tr = [];
// let td = [];
// for (let i = 0; i < n; i++){
//     tr[i] = document.createElement('tr');
//     for (let y =0; y < m; y++){
//         td[y] = document.createElement('td');
//         tr[i].appendChild(td[y]);
//     }
//     table.appendChild(tr[i]);

// }
// document.body.appendChild(table);