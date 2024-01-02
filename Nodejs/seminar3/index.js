const express = require("express");
const fs = require("fs");
const path = require("path");

const port = 3000;
const app = express();

const pathFile = path.join(__dirname, 'count.json');

// const count = {
//     main: 0,
//     about: 0
// }

const count = JSON.parse(fs.readFileSync(pathFile, "utf-8"));

app.get("/", (req, res) => {
    count.main++;
    fs.writeFileSync(pathFile, JSON.stringify(count, null, 2));
    res.send(`
    <h1>Корневая страница</h1>
    <p>Просмотров: ${count.main}</p>
    <a href='/about'>Ссылка на страницу /about</a>
    `)
});

app.get("/about", (req, res) => {
    count.about++;
    fs.writeFileSync(pathFile, JSON.stringify(count, null, 2));
    res.send(`
    <h1>Страница about</h1>
    <p>Просмотров: ${count.about}</p>
    <a href='/'>Ссылка на страницу /</a>
    `)
});


app.listen(port, () => console.log("Сервер запущен"));
