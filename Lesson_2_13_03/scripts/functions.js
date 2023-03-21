// ФУНКЦИИ

// Function declaration - объявление функции через слово function

// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10
// function multNum(num) {
//     return num * 10
// }
// console.log(multNum(10))

// не число +-*/ число === NaN
// Arrow function (стрелочная функция)

// Написать функцию, которая принимает в качестве аргумента число и возвращает это число, умноженное на 10 => через стрелочную

// const multNum_arrow = num => num * 10 //если строка одна то можно без return, в противном случае {return ...}

// const multNum_arrow = num => num * 10 //если аргумент один то можно без скобок, в противном случае (num1, num2)


// console.log(multNum_arrow(23)); // 230
// console.log(multNum_arrow(78)); // 780

// нельзя вызывать стрелочную ф-ю до ее обьявления до ее инициализации

// 1. Написать функцию, которая принимает в качестве аргумента 2 числа, а возвращает их сумму

// function sum(num1, num2) {
//     return num1 + num2
// }
// console.log(sum(10, 10))

const sum = (num1, num2) => num1 + num2

console.log(sum(10, 10))