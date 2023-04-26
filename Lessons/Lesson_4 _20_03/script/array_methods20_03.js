// МЕТОДЫ МАССИВОВ

const numbers = [1, 2, 3, 4, 5];

numbers.push(6); // добавляет элемент в конец массива
numbers.unshift(0); // добавляет элемент в начало массива
numbers.pop(); // удаляет элемент из конца массива
numbers.shift(); // удаляет элемент из начала массива

// console.log(numbers);



// 1. Дан массив с числами. Создать новый массив, в который войдут все числа из исходного массива, умноженные на 10



// 2. Сформировать массив, в который войдут все положительные числа из исходного массива

// цикл for
const nums = [4, 1, 15, -77, 33, -10, 55, 2];

const positiveNums = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        positiveNums.push(nums[i])
    }
}
console.log(positiveNums);

//for each

const positiveNums_forEach = [];
nums.forEach(el => el > 0 ? positiveNums_forEach.push(el) : '')
console.log(positiveNums_forEach)


