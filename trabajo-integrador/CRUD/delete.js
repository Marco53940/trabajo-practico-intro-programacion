const books = require('./read.js');
const write = require('../COMMANDS/write');

/**
    Esta funcion sirve para eliminar un libro basado en su id

    @param id es el identificador del libro a eliminar

    @returns void
*/

const deleteBook = id => {
    if (books.length > 0) {
        write(books.filter(book => book.id != id));
    }
}

module.exports = deleteBook;