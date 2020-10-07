const MySqli = require ('mysqli');

let conn = new MySqli({
    host: 'localhost',
    post: 3306,
    user: 'Tal',
    passwd: 'Aa123456',
    db: 'pcgamesstorenew',
});

let db = conn.emit(false, ''); /* <----- NO  SLAVE DB.. MASTER/SLAVE*/

module.exports = {   /* Creating a DB Object will be using along the whole project */
    database: db
};


