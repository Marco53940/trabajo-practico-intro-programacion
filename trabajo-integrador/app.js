const create = require('./CRUD/create.js');
const books = require('./CRUD/read.js');
const deleteBook = require('./CRUD/delete');
const update = require('./CRUD/update');

/**
    Esta aplicacion es un CRUD para gestionar una base de datos de Libros

    @param action es el comando recibido por el entry point

    @returns void
*/

const action = process.argv[2];

switch (action) {
    case 'new':
        var title = process.argv[3];
        var author = process.argv[4];
        var genre = process.argv[5];
        var year = process.argv[6];
        var cost = process.argv[7];
        var price = process.argv[8];
        create(title, author, genre, year, cost, price);
        break;

    case 'read':
        console.log(books);
        break;

    case 'edit':
        var id = process.argv[3];
        var title = process.argv[4];
        var author = process.argv[5];
        var genre = process.argv[6];
        var year = process.argv[7];
        var cost = process.argv[8];
        var price = process.argv[9];
        update(id, title, author, genre, year, cost, price);
        break;

    case 'delete':
        var id = process.argv[3];
        deleteBook(id);
        break;

    default:
        console.log('Comando no válido');
        break;
}







