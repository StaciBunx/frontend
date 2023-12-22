const photoContainer = document.getElementById('photo-container');


async function fetchPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=OP-sXsCAu2ykqIe58bRq8ohFkHfWRDWQwb-s76ZDguw`);
        const photo = await response.json();
        return photo;
    } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
        return null;
    }
}

fetchPhoto()
    .then(photo => {
        photoContainer.innerHTML += `
        <h2>Автор: ${photo.user.first_name}</h2> <br>
        <img src="${photo.urls.small}"> <br>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" class="button">
        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
        <b class="count">0</b>
        `
        const button = document.querySelector('.button');
        const countLike = document.querySelector('.count');

        button.addEventListener('click', () => {
            countLike.textContent++;
            button.classList.remove('active');
            button.classList.add('button-active')
        })

    })
