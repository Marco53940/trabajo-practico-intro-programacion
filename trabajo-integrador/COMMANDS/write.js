const fs = require('fs');

/**
    Esta funcion sirve para guardar la informacion en la base de datos

    @param data es la informacion a guardar en la base de datos

    @returns void
*/

const write = data => {
    fs.writeFileSync('./DATA/database.json', JSON.stringify(data));
}

module.exports = write;