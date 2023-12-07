"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50
символов в длину и не более 500. В случае неверной длины, необходимо выводить
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру.
На странице должны отображаться товары, под каждым товаром должен быть список
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не
делать, пока рано.
*/


const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const container = document.getElementById('container');
const template = document.getElementById('template');
const ids = []

function renderCatalog(initialData) {
  initialData.forEach(dataItem => {
    const node = document.importNode(template.content, true)
    const productBox = node.querySelector('.product');
    const error = productBox.querySelector('.error')
    const productName = productBox.querySelector('.product_name');
    productName.textContent = dataItem.product;


    const reviewsList = productBox.querySelector('.reviews');
    dataItem.reviews.forEach(review => {
      const li = document.createElement('li');
      li.textContent = review.text;
      reviewsList.appendChild(li);
      ids.push(review.id);
    });

    const form = productBox.querySelector('.form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = form.querySelector('.input');
      if (input.value.length < 50 || input.value.length > 500) {
        error.textContent = 'Отзыв слишком маленький или слишком большой'
        return;
      }
      const newReview = {
        id: Math.floor(Math.random() * (100 - 4 + 1)) + 4,
        text: input.value
      };

      dataItem.reviews.push(newReview);
      const newReviewLi = document.createElement('li');
      newReviewLi.innerText = newReview.text;
      reviewsList.appendChild(newReviewLi);
      input.value = '';
    });

    container.appendChild(productBox);
  });
}

renderCatalog(initialData);
