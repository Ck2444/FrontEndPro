// .forEach() - выполняет указанную функцию один раз для каждого элемента массива, ничего не возвращает

// .map() - выполняет указанную функцию один раз для каждого элемента массива, возвращает новый массив

// .filter() - возвращает новый массив, в который попадают те элементы, которые прошли указанную проверку

// 1. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень

// const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];

// Императивный подход - КАК сделать?
// const numbers_pow0 = [];
// for (let i = 0; i < numbers.length; i++) {
//     numbers_pow0.push(numbers[i] ** 3)
// }

// const numbers_pow1 = [];
// numbers.forEach(el => numbers_pow1.push(el ** 3));


// // Декларативный подход - ЧТО сделать?
// const numbers_pow2 = numbers.map(el => el ** 3);

// 2. Сформировать новый массив, в который попадут все последние цифры => [4, 6, 1, 7, 9, 5, 7, 3, 7]

// const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];

//  

// const numbers2 = numbers.map(el => el % 10);

// console.log(numbers2);

// 3. Сформировать новый массив, в который попадут все элементы из исходного массива. Если длина элемента меньше 6 (<), то добавить к этой строке 1 => ['hello1', 'apple1', 'orange', 'good morning', 'danke1', 'duck1', 'dinosaure']

//const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива. Если число четное, то поделить его на 2, а если нечетное - умножить на 2

//const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];

// strings.forEach(el => el.length < 6 ? strings_1.push(el + 1) : strings_1.push(el))



// const strings_2 = strings.map(el => el.length < 6 ? el + 1 : el);


// 5. Дан массив с разными типами данных. Сформировать новый массив - если элемент является числом, то заменить его на строку 'number' => ['number', 'hello', true, 'hi', 'number', 'number', false]

// 6. Дан массив с числами. Сформировать новый массив - если число меньше 0, то вернуть в массив 'negative'. А если больше 0 - 'positive' => ['positive', 'negative', 'positive', 'negative', 'negative', 'positive']

// const nums = [3, -9, 100, -7, -4, 33];

// const newArr = [];

// nums.forEach(el => el > 0 ? newArr.push('positive') : newArr.push('negative'))
// console.log(newArr);

// const newArr2 = nums.map(el => el > 0 ? 'positive' : 'negative')
// console.log(newArr);

// 7. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

// const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

// const filtered_strings = strings1.filter(el => el[0].toLowerCase() === 'd')
// console.log(filtered_strings);

// 8. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

// const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

// const strings2 = strings1.filter(el => el.length > 7)
// console.log(strings2);

// 9. Дан массив строк. Используйте метод map для преобразования каждой строки в новую строку, которая будет содержать ту же строку в верхнем регистре

const strings1 = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];

strings2 = strings1.map(el => el.toUpperCase())

console.log(strings2);

// 10. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, в котором каждое число возведено в квадрат.

const powNums = arr => arr.map

const 