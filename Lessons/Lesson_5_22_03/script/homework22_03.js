// ДЗ (for и forEach)

// 1. Дан массив с числами. Вычислить сумму элементов массива
// const arr = [22, 76, 12, 38, 52];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

// console.log('========');
// let sum_forEach = 0;
// arr.forEach(items => {
//     sum_forEach += items
// })

// console.log(sum_forEach);

// 2. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, длина которых больше 7 символов

// const arr = ["apple", "bananablue", "orange", "grapebig", "peach and banana"];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 7) {
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);

// console.log("==========");

// let arr_forEach = [];

// arr.forEach(item => {
//     if (item.length > 7) {
//         arr_forEach.push(item)
//     }
// })
// console.log(arr_forEach);

// 3. Дан массив со строками. Сформировать новый массив, в который попадут все строки из исходного массива, которые начинаются на букву D или d

const arr = ["apple", "Dananablue", "dorange", "grapebig", "Deach and banana"];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toLowerCase() === 'd') {
        newArr.push(arr[i])
    }
}
console.log(newArr);

console.log('=========');

// let newArr_forEach = [];
// arr.forEach(item => item.toLowerCase()[0] === 'd' ? newArr_forEach.push(item) : '')

// console.log(newArr_forEach);

console.log('=======')


let newArr_forEach = [];
arr.forEach(item => item.charAt(0).toLowerCase() === "d" ? newArr_forEach.push(item) : '')

console.log(newArr_forEach);

// 4. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, возведенные в 3 степень
// const arr = [6, 12, 14, 28, 37];

// const arrNew = [];

// for (let i = 0; i < arr.length; i++) {
//     arrNew.push(arr[i] ** 3)
// }
// console.log(arrNew);

// console.log('======');

// const arrNew_forEach = [];
// arr.forEach(item => {
//     arrNew_forEach.push(item ** 3)
// })
// console.log(arrNew_forEach)

// 5. Дан массив с числами. Сформировать новый массив, в который попадут все числа из исходного массива, заканчивающиеся на 7 

    // const arr = [7, 6, 12, 14, 77, 28, 37];

    // const arrNew = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 10 === 7) {
    //         arrNew.push(arr[i])
    //     }
    // }
    // console.log(arrNew);

    // console.log('========');

    // const arrNew_forEach = [];

    // arr.forEach(item => item % 10 === 7 ? arrNew_forEach.push(item) : '')
    // console.log(arrNew_forEach);






