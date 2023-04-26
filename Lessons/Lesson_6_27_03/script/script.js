// 1. Написать функцию, которая принимает массив и возвращает новый массив только со строками длиннее 6 символов и начинающихся на букву 'h'/'H'
// const arrLength = array => array.filter(el => el.length > 6 && el[0].toLowerCase() === 'h');


// console.log(arrLength(['hellkkkkko', 'Happpple', 'orange', 'good morning']));

// 2. Написать функцию, которая принимает массив с числами и возвращает новый массив с положительными числами, умноженными на 2

// const numbers = [3, -8, 9, -1, 80, -33]; // [6, 18, 160]

// const numbers2 = array => numbers.filter(el => el > 0).map(el => el * 2);
// console.log(numbers2());


// ОБЪЕКТЫ

// const user = {
//     firstname: 'Nelli',
//     lastname: 'Efremyan',
//     age: 28,
//     active: true,
//     address: {
//         country: 'Armenia',
//         city: 'Yerevan'
//     },
//     skills: ['JS', 'SQL']
// }

// console.log(user.address);

// const { firstname, age } = user;

// console.log(firstname); // 'Nelli'
// console.log(age); // 28
// console.log(address); // address is not defined

// 1. Вывести в консоль имя пользователя

// console.log(user); // {}
// console.log(user.firstname); // 'Nelli'
// console.log(user.age); // 28
// console.log(user.address); // { country: 'Armenia', city: 'Yerevan' }
// console.log(user.skills); // ['JS', 'SQL']



// console.log(user.firstname); // 'Nelli'
// console.log(user[key]); // 'Nelli'
// console.log(user.key); // undefined

// 2. Написать функцию, которая принимает два аргумента - объект и название ключа. Функция возращает значение по переданному ключу.
// const user = {
//     firstname: 'Nelli',
//     lastname: 'Efremyan',
//     age: 28,
//     active: true,
//     address: {
//         country: 'Armenia',
//         city: 'Yerevan'
//     },
//     skills: ['JS', 'SQL']
// }

// 3. Вывести в консоль все навыки пользователя
// 'JS'
// 'SQL'

// console.log(user.skills); // ['JS', 'SQL']
// user.skills.forEach(el => console.log(el[0]));
// console.log(user.skills[0]); // 'JS'

// JS[0] => J
// SQL[0] => S

// const { firstname, age } = user;

// console.log(firstname); // 'Nelli'
// console.log(age); // 28
// console.log(address); // address is not defined

// const key = 'firstname';


// const getValue = (obj, key) => {
//     return obj[key];
// }

// console.log(getValue(user, 'lastname'));

const users = [
    {
        id: 1,
        firstname: 'Anton',
        age: 28,
        active: true
    },
    {
        id: 2,
        firstname: 'Irina',
        age: 18,
        active: true
    },
    {
        id: 3,
        firstname: 'Olga',
        age: 32,
        active: false
    },
    {
        id: 4,
        firstname: 'Danila',
        age: 14,
        active: true
    },
    {
        id: 5,
        firstname: 'Ivan',
        age: 54,
        active: false
    }
];

// 1. Вывести в консоль все имена пользователей
// 2. Вывести в консоль информацию о каждом пользователе в формате 'Name: <name>, Age: <age>'

// users.forEach(el => {
//     const { firstname, age } = el;
//     console.log(`Name ${firstname}, age: ${age}`)

// });

// users.forEach(({ firstname, age }) => console.log(`Name ${firstname}, age: ${age}`));

// 3. Сформировать новый массив adult_users, в который попадут только совершеннолетние пользователи => [{}, {}, {}, {}]

// const adult_users = users.filter(el => el.age >= 18);
// const adult_users = users.filter(({ age }) => age >= 18);

// console.log(adult_users);

// 4. Сформировать новый массив, в который попадут только имена пользователей => ['Anton', 'Irina', 'Olga', 'Danila', 'Ivan']

const nameOnly = users.map(({ firstname }) => firstname);

console.log(nameOnly);