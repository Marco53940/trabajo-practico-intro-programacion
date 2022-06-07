const books = require('./read.js');
const writer = require('../COMMANDS/write.js');





const create = (title, author, genre, year, cost, price) => {

    let id = 0;

    if (books.length > 0) {

        books.forEach((element) => {
            id = element.id;
        });
    }

    id++;

    const newBook = {
        id: id,
        title: title,
        author: author,
        genre: genre,
        year: year,
        cost: cost,
        price: price
    }

    books.push(newBook);
    writer(books);

}

module.exports = create;