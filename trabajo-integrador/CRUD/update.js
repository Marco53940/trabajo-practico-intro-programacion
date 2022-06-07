const books = require('./read.js');
const writer = require('../COMMANDS/write');


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