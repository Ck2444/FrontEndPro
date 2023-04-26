// ДЗ (массив users)
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
// 1. Сформировать новый массив, в который попадут только возраст пользователей => [28, 18, 32, 14, 54]

// const ageOnly = users.map(({ age }) => age);
// console.log(ageOnly);
// 2. Сформировать новый массив, в который попадет информация о каждом пользователе в формате 'Name: <firstname>, Age: <age>'
// const nameAge = [];
// users.forEach(({ firstname, age }) => nameAge.push(`Name ${firstname}, age: ${age}`));

// console.log(nameAge);

// 3. Сформировать новый массив, в который попадут только те пользователи, чье имя начинается на I
// console.log(user.skills); // ['JS', 'SQL']
// user.skills.forEach(el => console.log(el[0]));
// console.log(user.skills[0]); // 'JS'
// const nameI = [];
// users.forEach(el => el.firstname[0] === 'I' ? nameI.push(el) : '')

// console.log(nameI);

// ***
// 1. Сформировать новый массив, в который попадет информация о каждом совершеннолетнем пользователе в формате 'Name: <firstname>, Age: <age>'

// const fullAge = [];
// users.forEach(el => el.age >= 18 ? fullAge.push(el) : '')
// console.log(fullAge);

// 2. Сформировать новый массив, в который попадут только активные и совершеннолетние пользователи
// const ActiveFullAge = [];
// users.forEach(el => el.age >= 18 && el.active === true ? ActiveFullAge.push(el) : '')
// console.log(ActiveFullAge);

// 3. Сформировать новый массив без пользователей, чье имя начинается на букву O
// console.log(user.skills); // ['JS', 'SQL']
// user.skills.forEach(el => console.log(el[0]));
// console.log(user.skills[0]); // 'JS'
// const withotO = [];
// users.forEach(el => el.firstname[0] !== 'O' ? withotO.push(el) : '')

// console.log(withotO);

// 4. Сформировать новый массив, в который попадут только имена активных и совершеннолетних пользователей в нижнем регистре

// const fullAgeLowerCase = [];

// users.filter(el => el.age >= 18).map(el => fullAgeLowerCase.push(el.firstname.toLowerCase()))

// console.log(fullAgeLowerCase)

// ****
// 1. Сформировать новый массив, где пользователи будут отсортированы по возрасту (.sort())
// const users_map = users.map(el => el).sort((a, b) => a.age - b.age);
// console.log(users_map);

const sorted_users2 = [...users].sort((a, b) => a.age - b.age);
console.log(sorted_users2);
// 2. Найти сумму возрастов всех пользователей (.reduce())

// const sum = users.reduce((acc, el) => acc + el.age, 0);
// console.log(sum);




