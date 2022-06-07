const books = require('./read.js');
const write = require('../COMMANDS/write');

const deleteBook = id => {
    if (books.length > 0) {
        write(books.filter(book => book.id != id));
    }
}

module.exports = deleteBook;