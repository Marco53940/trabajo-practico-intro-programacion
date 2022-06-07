const books = require('./read.js');
const writer = require('../COMMANDS/write.js');



/**
    Esta funcion sirve para crear un libro a partir de su informacion 

    @param title titulo del libro

    @param author autor del libro

    @param genre genero del libro

    @param year año de publicacion del libro

    @param cost costo del libro

    @param price precio de venta del libro

    @returns void
*/

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