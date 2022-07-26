const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Iniciado!');
});

app.route('/api/bookstore').get((request, response) => {
  response.send(BOOKS);
});


var BOOKS = [
    {
        id: 1,
        name: 'The Witcher - Box capa dura',
        price: 374.91,
        quantity: 20,
        category: 'Ficção, aventura e fantasia',
        imageUrl: '/assets/images/box-the-witcher.png',
    },
    {
        id: 2,
        name: 'Assassins Creed',
        price: 74.91,
        quantity: 15,
        category: 'Ficção, aventura e fantasia',
        imageUrl: '/assets/images/assassins-creed.png',
    },
    {
        id: 3,
        name: 'Dracula',
        price: 374.91,
        quantity: 20,
        category: 'Ficção e Horror',
        imageUrl: '/assets/images/dracula.png',
    },
    {
        id: 4,
        name: 'Fallen',
        price: 50.99,
        quantity: 35,
        category: 'Ficção, Romance e Suspense',
        imageUrl: '/assets/images/fallen.png',
    },
    {
        id: 5,
        name: 'Harry Potter',
        price: 84.91,
        quantity: 5,
        category: 'Ficção, aventura e fantasia',
        imageUrl: '/assets/images/harry-potter.png',
    },
    {
        id: 6,
        name: 'Percy Jackson',
        price: 94.50,
        quantity: 10,
        category: 'Ficção, aventura e fantasia',
        imageUrl: '/assets/images/percy-jackson.png',
    }
];