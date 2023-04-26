// Написать универсальную функцию, которая принимает строку и callback-функцию (инструкцию), и формирует новую строку в соответствии с переданной инструкцией
const replace = (str, func) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += func(str[i]);
    }
    return newStr;
}

// все буквы 'a' заменены на 'A'
const replaceA = a => a.replace('a', 'A')

// все буквы 'o' и 'a' заменены на *
const replaceO = o => o === 'a' || o === 'o' ? '*' : o;
// все буквы i заменены на 1
const replaceI = i => i.replace('i', 1)

console.log(replace('mama', replaceA));
console.log(replace('moma', replaceO));
console.log(replace('mimi', replaceI));
console.log(replace('mama', replaceO));


const changeLetters = str => {
    let new_str = '';
    new_str += str

    return new_str
}

console.log(changeLetters('hello')); // 
