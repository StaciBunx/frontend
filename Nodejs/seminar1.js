const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<a>Добро пожаловать на страницу обо мне!</a>');
    }
})




const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});