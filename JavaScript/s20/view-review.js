const reviewKey = 'reviews';
const reviewView = JSON.parse(localStorage.getItem(reviewKey));
const container = document.querySelector('.container');

function fetchReviews() {
    return new Promise((resolve, reject) => {
        if (reviewView) {
            resolve(reviewView);
        } else {
            reject(new Error('Отзывов нет :('));
        }
    })
}

function renderReviews(reviews) {
    reviews.forEach(({ name, text }) => {
        const reviewEl = `
        <div class="review">
        <h2>${name}</h2>
        <button class="view-button">Показать отзыв</button>
        <div class="review-block" style="display: none">
        <p>${text}</p>
        <button class="remove-button">Удалить</button>
        </div>
        </div>
        `
        container.insertAdjacentHTML("beforeend", reviewEl);
    });

    const buttonsView = document.querySelectorAll('.view-button');
    buttonsView.forEach(button => {
        button.addEventListener("click", () => {
            const reviewBlock = findElement(button, '.review-block');
            toggleReviewButton(button, reviewBlock)
        });
    });

    const buttonsRemove = document.querySelectorAll('.remove-button');
    buttonsRemove.forEach(button => {
        button.addEventListener("click", () => {
            const review = button.closest('.review');
            review.remove();
        })
    });

};

function findElement(element, selector) {
    let sibling = element.nextElementSibling;
    while (sibling) {
        if (sibling.matches(selector)) {
            return sibling;
        } else {
            const matchedChild = sibling.querySelector(selector);
            if (matchedChild) {
                return matchedChild;
            }
        }
        sibling = sibling.nextElementSibling;
    }
    return null;
}

function toggleReviewButton(button, block) {
    if (block.style.display === 'none') {
        button.textContent = 'Скрыть текст';
        block.style.display = 'block';
    } else {
        button.textContent = 'Показать отзыв';
        block.style.display = 'none';
    }
}

fetchReviews()
    .then((reviews) =>
        renderReviews(reviews)
    )
    .catch((error) => console.log(error.message));

console.log(reviewView);