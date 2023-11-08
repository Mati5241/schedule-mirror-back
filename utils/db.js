const mysql = require('mysql2/promise');



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'schedule',
    decimalNumbers: true,
    multipleStatements: true,
    namedPlaceholders: true,

});

module.exports = {
    pool,
}