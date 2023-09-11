import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);

const content = document.querySelector('.content');
const largeImg = document.querySelector('.largeImg');

data.forEach(({ id, title, thumbnailUrl }) => {
    const div = document.createElement('div');
    div.classList.add('card');
    content.appendChild(div);

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('card__thumbnail');
    thumbnail.src = thumbnailUrl;
    div.appendChild(thumbnail);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card__body');
    div.appendChild(cardBody);

    const idPhoto = document.createElement('p');
    idPhoto.classList.add('card__id');
    idPhoto.textContent = `id: 0000${id}`;
    cardBody.appendChild(idPhoto);

    const titlePhoto = document.createElement('h3');
    titlePhoto.classList.add('card__title');
    titlePhoto.textContent = title;
    cardBody.appendChild(titlePhoto);
});


thumbnail.addEventListener('click', function (e) {
    let thumb = e.target.closest('img');
    if (!thumb) return;
    largeImg.src = url;
});