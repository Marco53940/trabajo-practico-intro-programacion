const fs = require('fs');

/**
    Esta funcion sirve para leer el contenido de la base de datos

    @returns void
*/

if (!fs.existsSync('./DATA/database.json')) {
    fs.writeFileSync('./DATA/database.json', '[]');
}

let data = fs.readFileSync('./DATA/database.json', 'utf-8');

module.exports = JSON.parse(data);