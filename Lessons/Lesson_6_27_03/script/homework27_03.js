// ДЗ (map или filter)
// 1. Напишите функцию, которая принимает массив строк и возвращает новый массив строк, в котором все первые буквы каждого слова написаны заглавными буквами.
const array = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure']
// const upperCase = arr => array.map(el => el[0].toUpperCase() + el.slice(1))

const firstLetterUp = array => array.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(firstLetterUp(array));

// console.log(upperCase(array));

// const capitalizeWords = (arr) => {
//     return arr.map((str) => {
//         const words = str.split(' ');
//         const capitalizedWords = words.map((word) => capitalizeFirstLetter(word));
//         return capitalizedWords.join(' ');
//     });
// }

// console.log(capitalizeWords(['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure']));

// 2. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только положительные числа.
// const arr = [12, -3, 8, 22, -3, 14];
// const positiveNum = arrNum => arr.filter(el => el > 0)
// console.log(positiveNum(arr));

// 3. Напишите функцию, которая принимает массив чисел и возвращает новый массив чисел, содержащий только нечетные числа.
// const arr = [10, 38, 17, 56, 13];

// const returnOddsNum = oddsNum => arr.filter(el => el % 2 !== 0);

// console.log(returnOddsNum());

// 4. Создайте новый массив, содержащий только элементы исходного массива, которые делятся на три без остатка.
// const arr = [9, 38, 16, 56, 12];

// const remainderOfDivision = arr.filter(el => el % 3 === 0);
// console.log(remainderOfDivision);

// 5. Создайте новый массив, содержащий только те элементы исходного массива, которые больше чем 10 и меньше чем 20.
// const arr = [9, 18, 16, 56, 12, 44, 19];

// const tenTwenty = arr.filter(el => el > 10 && el < 20);
// console.log(tenTwenty);
// 6. Создайте новый массив, содержащий только те элементы исходного массива, которые не являются строками.
// const arr = [3, 'hello', true, 'hi', 7, 10, false];

// const notStrings = arr.filter(el => typeof el !== 'string' && typeof el !== 'boolean')

// console.log(notStrings);
// *7. Макет: https://www.figma.com/file/RbKedig5BcfNRyZ64Tdfow/Lamp?t=WJWTgZs8pWAWRVRE-0

