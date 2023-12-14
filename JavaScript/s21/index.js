function renderTable(jsondata) {
    let data = getDataFromLocalStorage();
    if (data.length === 0) {
        data = jsondata;
    }
    setDataForLocalStorage(data);
    const tbody = document.querySelector('tbody');
    data.forEach(({ id, name, time, maxParticipants, currentParticipants }) => {
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
            if (currentCountEl.textContent < searchLesson.maxParticipants) {
                searchLesson.currentParticipants++;
                localStorage.setItem(idKey, JSON.stringify(searchLesson));
                currentCountEl.textContent = searchLesson.currentParticipants;
                cancelButton.style.display = 'block'

            } else {
                button.disabled = true;
                cancelButton.style.display = 'block'

            }
            cancelButton.addEventListener("click", () => {
                button.disabled = false;
                searchLesson.currentParticipants--;
                localStorage.setItem(idKey, JSON.stringify(searchLesson));
                currentCountEl.textContent = searchLesson.currentParticipants;

            })
        })
    });
}


fetchData()
    .then((jsondata) => renderTable(jsondata))
    .catch((error) => console.log(error.message));
