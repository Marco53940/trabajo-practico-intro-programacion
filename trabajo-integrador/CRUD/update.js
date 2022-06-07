const books = require('./read.js');
const writer = require('../COMMANDS/write');

/**
    Esta funcion sirve para actualizar la informacion de
    un libro en particular basado en su Id

    @param id identificador del libro

    @param title titulo del libro

    @param author autor del libro

    @param genre genero del libro

    @param year año de publicacion del libro

    @param cost costo del libro

    @param price precio de venta del libro

    @returns void
*/

const update = (id, title, author, genre, year, cost, price) => {

    if (books.length > 0) {

        books.forEach(book => {

            if (book.id == id) {
                book.title = title;
                book.author = author;
                book.genre = genre;
                book.year = year;
                book.cost = cost;
                book.price = price;
            }
        });
        writer(books);
    }
}

module.exports = update;