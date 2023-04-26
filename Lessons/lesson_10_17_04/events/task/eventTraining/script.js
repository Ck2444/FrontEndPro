// 1. При клике на кнопку меняется цвет текста на зеленый
const click_btn = document.querySelector('.click_btn');
const text = document.querySelector('.text');

click_btn.addEventListener('click', () => text.style.color = 'green');
// 2. При клике на кнопку в div.container добавляется параграф
const addPbtn = document.querySelector('.add_par_btn');
const container = document.querySelector('.container');

addPbtn.addEventListener('click', () => {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Fuck you!';
    container.appendChild(paragraph);
})


// 3. Создать два параграфа. При клике на первый параграф, у второго меняется цвет текста на красный и увеличивается шрифт до 20px. При клике на второй параграф, у первого меняется цвет заднего фона на зеленый и цвет текста на белый
const par_Eins = document.querySelector('.par_1');
const par_Zwei = document.querySelector('.par_2');

par_Eins.addEventListener('click', () => {
    par_Zwei.style.color = 'red';
    par_Zwei.style.fontSize = '20px'

})

par_Zwei.addEventListener('click', () => {
    par_Eins.style.color = 'green';
    par_Eins.style.fontSize = '30px';
})

// 4. При клике на кнопку цвет текста меняется на красный. При повторном клике обратно на черный

// .toggle()

const changeColorBtn = document.querySelector('.change_color_btn');
const changeColorText = document.querySelector('.change_color_text');

changeColorBtn.addEventListener('click', () => changeColorText.classList.toggle('color'));


// 5. При клике на кнопку цвет текста меняется на синий и размер шрифта увеличиваться до 30px. При повторном клике возращать всё, как было

const changeStyles = document.querySelector('.change_styles_btn');
const changeStylesText = document.querySelector('.change_styles_text');

changeStyles.addEventListener('click', () => changeStylesText.classList.toggle('styles')
);


// 6. При клике на кнопку содержимое инпута выводится в консоль.
const showBtn = document.querySelector('.show_btn');
const type = document.querySelector('.show_input');

showBtn.addEventListener('click', () => {
    console.log(type.value);
    type.value = '';
})


// 7. При клике на кнопку содержимое инпута меняется на !!!

const changeValue = document.querySelector('.change_value_btn');
const valueText = document.querySelector('.change_value_input');

changeValue.addEventListener('click', () => valueText.value = '!!!')


// 8. При клике на кнопку менять содержимое инпута на значения из массива

const symbols = ['...', '!!!', '+++', '&&&'];
let i = 0;

const changeSymbleBtn = document.querySelector('.change_symbol_btn');
const changeSymbleInput = document.querySelector('.change_symbol_input');

changeSymbleBtn.addEventListener('click', () => {
    changeSymbleInput.value = symbols[i++ % symbols.length];
})


// 9. При клике на кнопку изменять цвет фона на черный. При повторном клике вернуть белый фон

const changeBackground = document.querySelector('.change_back_btn');

changeBackground.addEventListener('click', () =>
    document.body.classList.toggle('back_color'))
// ДЗ
// 1. При клике на кнопку менять цвет заднего фона на цвет из массива

const array = ['pink', 'green', 'blue']
let index = 0;

const changeBackgroundColor = document.querySelector('.array_colors');

changeBackgroundColor.addEventListener('click', () => {
    document.body.style.backgroundColor = array[index++ % array.length];
})


// 2. *При клике на кнопку менять цвет заднего фона на случайный

const randomColors = document.querySelector('.array_random_colors');

randomColors.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})