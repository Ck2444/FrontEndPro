// Дан массив объектов с информацией о студентах. Создайте таблицу, отображающую имя, фамилию, возраст и средний балл каждого студента. Выделите красным цветом тех студентов, у которых средний балл меньше 4.0.
const students = [
    {
        name: 'John',
        surname: 'Doe',
        age: 20,
        averageGrade: 4.5,
        photo: 'https://reqres.in/img/faces/1-image.jpg',
        email: 'example5@gmail.com'
    },
    {
        name: 'Jane',
        surname: 'Smith',
        age: 35,
        averageGrade: 3.8,
        photo: 'https://reqres.in/img/faces/2-image.jpg',
        email: 'example5@gmail.com'
    },
    {
        name: 'Bob',
        surname: 'Johnson',
        age: 29,
        averageGrade: 3.2,
        photo: 'https://reqres.in/img/faces/5-image.jpg',
        email: 'example5@gmail.com'
    },
    {
        name: 'Sarah',
        surname: 'Brown',
        age: 27,
        averageGrade: 4.1,
        photo: 'https://reqres.in/img/faces/6-image.jpg',
        email: 'example5@gmail.com'
    },
];

const container = document.querySelector('.cards_container');

students.forEach(({ name, surname, age, averageGrade, photo, email }) => {
    const cardElem = document.createElement('div');
    const nameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const averageGradeElem = document.createElement('p');
    const photoElem = document.createElement('img');
    const emailElem = document.createElement('a');

    nameElem.innerText = `Student: ${name} ${surname}`;
    ageElem.innerText = `Age: ${age}`;
    emailElem.innerText = `Contact this user`;


    cardElem.classList.add('cardElem');
    cardElem.style.backgroundColor = averageGrade < 4.0 ? 'rgb(51, 176, 122)' : 'rgb(159, 51, 176)';

    cardElem.style.border = averageGrade > 4.0 ? '2px solid rgb(28, 24, 28' : '2px solid rgb(78, 26, 87)';

    photoElem.setAttribute('src', photo);
    photoElem.setAttribute('alt', `${name} ${surname}`);
    emailElem.setAttribute('href', `mailto${email}`);



    cardElem.append(photoElem, nameElem, ageElem, averageGradeElem, emailElem);
    container.append(cardElem);
})

