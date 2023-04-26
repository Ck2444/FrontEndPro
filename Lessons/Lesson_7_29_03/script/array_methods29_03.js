// .sort() - сортирует элементы массива (как числа, так и строки), мутирует исходный массив (!)


// const numbers = [33, 1, 7, 3, 56];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// numbers.sort((a, b) => b - a);
// console.log(numbers);

const names = ['Anna', 'Ivan', 'Anton', 'Pavel'];

names.sort((a, b) => a.localeCompare(b)); // ['Anna', 'Anton', 'Ivan', 'Pavel']
console.log(names);
names.sort((a, b) => b.localeCompare(a)); //  ['Pavel', 'Ivan', 'Anton', 'Anna']
console.log(names);

// Создать копию массива

const nums = [5, 32, 334, 25, 58, 85];

const nums_map = nums.map(el => el).sort((a, b) => a - b);
const nums_slice = nums.slice().sort((a, b) => a - b);
const nums_spread = [...nums].sort((a, b) => a - b);

// console.log(nums);
// console.log(nums_map);
// console.log(nums_slice);
// console.log(nums_spread);

// .reduce() - возвращает аккумулирующее значение

let acc = 0;
for (let i = 0; i < nums.length; i++) {
    acc += nums[i]
}

const sum = nums.reduce((acc, el) => acc + el, 0);

console.log(nums);
console.log(...nums);
