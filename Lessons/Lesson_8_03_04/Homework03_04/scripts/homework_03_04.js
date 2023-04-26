// 2. Дан массив с товарами. Для каждого товара создать карточку. Стилизовать карточку (title, price). Если товар есть на складе, то цвет заднего фона сделать зеленым. А если нет - то серым

const products = [
    {
        id: 1,
        title: 'Apple',
        price: 100,
        in_stock: true,
        photo: 'https://i.pinimg.com/originals/0e/fa/4b/0efa4b0a1b71169358218cfe54ae66eb.jpg'
    },

    {
        id: 2,
        title: 'Orange',
        price: 200,
        in_stock: false,
        photo: 'https://cdn.pixabay.com/photo/2016/02/23/17/42/orange-1218158_1280.png'
    },
    {
        id: 3,
        title: 'Kiwi',
        price: 150,
        in_stock: true,
        photo: 'https://www.floristik21.de/media/images/org/Kiwi-9116.jpg'
    },
    {
        id: 4,
        title: 'Banana',
        price: 300,
        in_stock: false,
        photo: 'https://th-thumbnailer.cdn-si-edu.com/4Nq8HbTKgX6djk07DqHqRsRuFq0=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg'
    },
    {
        id: 5,
        title: 'Pineapple',
        price: 400,
        in_stock: false,
        photo: 'https://media.istockphoto.com/id/452352231/de/foto/ananas.jpg?s=612x612&w=0&k=20&c=Sw7DIUe6-rUHjrdpOIknR6i9hD7b1g34Y8Z5EaHmH5M='
    }
]

const container = document.querySelector('.cards_container');

products.forEach(({ title, price, in_stock, photo }) => {
    // const const{title, price} = el;
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const photoElem = document.createElement('img');

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;

    // cardElem.style.border = '1px solid black';
    // cardElem.style.padding = '10px';
    // cardElem.style.borderRadius = '10px';
    // cardElem.style.textAlign = 'center';

    cardElem.classList.add('cardElem');
    cardElem.style.backgroundColor = in_stock ? 'lightgreen' : 'lightgray';

    photoElem.setAttribute('src', photo);
    photoElem.setAttribute('alt', title);

    cardElem.append(photoElem, titleElem, priceElem);
    container.append(cardElem);
})

