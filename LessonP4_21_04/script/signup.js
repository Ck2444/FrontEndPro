// 0. Новый js файл для signup страницы подключить где будет логика js для регистрации
// 1. Найти все инпуты
// 2. Как проверить email ли введен? - проверить строку на наличие собачки
// 3. Проверить совпадает ли пароль и проверка пароля - сравнить значения пароля и проверки пароля
// 4. Проверка длины пароля - не меньше 6
// 5. Проверка наличия знаков ! или _
// 6. По результату - если все окей -> прыгаем на гифку, если не окей -> alert(сообщение ошибки)

const elEmail = document.querySelector('input[type="email"]');
const elPassword = document.querySelector('input[type="password"]');

const correctEmail = 'example@gmail.com';
const correctPass = 'qqqmmm';

