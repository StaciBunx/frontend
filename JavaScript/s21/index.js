
// const lessonsKey = 'lessons';
// const lessonsData = JSON.parse(localStorage.getItem(lessonsKey));
// const localdata = JSON.parse(localStorage.getItem(lessonsKey));

function renderTable(localdata) {
    if (!localdata) {
        console.error('Ошибка! Данные не загрузились из localStorage');
    }
    else {
        const tbody = document.querySelector('tbody');
        localdata.forEach(({ id, name, time, maxParticipants, currentParticipants }) => {
            const tableRow = `
            <tr>
                <td>${name}</td>
                <td>${time}</td>
                <td class="max_participants">${maxParticipants}</td>
                <td class="sign_participants">
                <span class="current_participants">${currentParticipants}</span>
                <button data-id="${id}" class="sign" style="margin-right:10px">Записаться</button>
                <button data-id="${id}" class="cancel">Отменить</button>
                </td>
            </tr>
    `
            tbody.insertAdjacentHTML("beforeend", tableRow);

        });
        signForLesson();
        cancelLesson();

    }
}

async function fetchData() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Не удалось получить данные с data JSON");
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}


function setDataForLocalStorage(data) {
    if (data instanceof Array) {
        data.forEach(element => {
            localStorage.setItem(element.id, JSON.stringify(element));
        });
    } else {
        localStorage.setItem(data.id, JSON.stringify(data));
    }

}

function getDataFromLocalStorage() {
    const lessons = []
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        lessons.push(JSON.parse(localStorage.getItem(key)));
    }
    return lessons;
}

function signForLesson() {
    const buttons = document.querySelectorAll('.sign');
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const idKey = button.dataset.id;
            const searchLesson = JSON.parse(localStorage.getItem(idKey));
            let currentCountEl = button.closest('.sign_participants').firstElementChild;
            let cancelButton = button.closest('.sign_participants').lastElementChild;
            console.log(cancelButton);
            if (currentCountEl.textContent < searchLesson.maxParticipants) {
                searchLesson.currentParticipants++;
                localStorage.setItem(idKey, JSON.stringify(searchLesson));
                currentCountEl.textContent = searchLesson.currentParticipants;
                cancelButton.style.display = 'block'

            } else {
                button.disabled = true;
            }
        })
    });
}

function cancelLesson() {
    const buttons = document.querySelectorAll('.cancel');
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const idKey = button.dataset.id;
            const searchLesson = JSON.parse(localStorage.getItem(idKey));
            let currentCountEl = button.closest('.sign_participants').firstElementChild;
            searchLesson.currentParticipants--;
            localStorage.setItem(idKey, JSON.stringify(searchLesson));
            currentCountEl.textContent = searchLesson.currentParticipants;
        })
    })
}

function guardMaxParticipantsSignUP(lesson, button) {
    if (lesson.currentParticipants === lesson.maxParticipants) {
        button.disabled = false;
    }
}


fetchData()
    .then((data) => renderTable(data))
    .catch((error) => console.log(error.message));
renderTable(getDataFromLocalStorage());
