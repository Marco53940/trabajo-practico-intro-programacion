const fs = require('fs');

const write = data => {
    fs.writeFileSync('./DATA/database.json', JSON.stringify(data));
}

module.exports = write;