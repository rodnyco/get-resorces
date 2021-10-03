const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3000;
 
// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
app.use(favicon(__dirname + '../build/favicon.ico')); 
 
//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../build')));
 
//простой тест сервера
app.get('/ping', function (req, res) {
    return res.send('pong');
});
 
 //обслуживание html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/resorces', function(req, res) {
    res.json({
        'books': [
            {'id': 0, 'title': 'Теория и методика обучения математике: частная методика в 2 ...', 'link': 'https://books.google.ru/books?id=GjYkEAAAQBAJ&pg=PA70&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgHEAI'},
            {'id': 1, 'title': 'Уравнения в школьном курсе математики - Страница 69', 'link': 'https://books.google.ru/books?id=5UT6AgAAQBAJ&pg=PA69&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgKEAI'}
        ],
        'videos': [
            {'id': 0, 'title': 'asdasdasdasdsadsad.', 'link': 'https://books.google.ru/books?id=GjYkEAAAQBAJ&pg=PA70&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgHEAI'},
            {'id': 1, 'title': 'ВИДЕО', 'link': 'https://books.google.ru/books?id=5UT6AgAAQBAJ&pg=PA69&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgKEAI'}
        ],
        'audios': [
            {'id': 0, 'title': 'Теория и методика обучения математике: частная методика в 2 ...', 'link': 'https://books.google.ru/books?id=GjYkEAAAQBAJ&pg=PA70&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgHEAI'},
            {'id': 1, 'title': 'Уравнения в школьном курсе математики - Страница 69', 'link': 'https://books.google.ru/books?id=5UT6AgAAQBAJ&pg=PA69&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgKEAI'}
        ],
        'images': [
            {'id': 0, 'title': 'Теория и методика обучения математике: частная методика в 2 ...', 'link': 'https://books.google.ru/books?id=GjYkEAAAQBAJ&pg=PA70&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgHEAI'},
            {'id': 1, 'title': 'Уравнения в школьном курсе математики - Страница 69', 'link': 'https://books.google.ru/books?id=5UT6AgAAQBAJ&pg=PA69&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgKEAI'}
        ],
        'presentations': [
            {'id': 0, 'title': 'Теория и методика обучения математике: частная методика в 2 ...', 'link': 'https://books.google.ru/books?id=GjYkEAAAQBAJ&pg=PA70&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgHEAI'},
            {'id': 1, 'title': 'Уравнения в школьном курсе математики - Страница 69', 'link': 'https://books.google.ru/books?id=5UT6AgAAQBAJ&pg=PA69&dq=%D1%83%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%81+%D0%B4%D0%B2%D1%83%D0%BC%D1%8F+%D0%BD%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%BC%D0%B8+%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0&hl=ru&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiwgc7V2qzzAhU7CRAIHYUKBQAQ6AF6BAgKEAI'}
        ]
    });
});

app.listen(port);