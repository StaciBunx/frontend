// Для работы с localStorage
const reviewKey = 'reviews';
const reviewValue = [];


// Элементы страницы добавления отзывов
const inputProduct = document.querySelector('.input-product');
const inputReview = document.querySelector('.input-review');
const inputButton = document.querySelector('.input-button');
const error = document.querySelector('.error');

// Элементы страницы просмотра отзывов


inputButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (!inputProduct.value || !inputReview.value) {
        error.textContent = 'Поля не могут бысть пустыми';
    }
    else {
        error.textContent = '';
        const reviewObj = {};
        reviewObj.name = inputProduct.value;
        reviewObj.text = inputReview.value;
        reviewValue.push(reviewObj);
        localStorage.setItem(reviewKey, JSON.stringify(reviewValue));
    }
});
