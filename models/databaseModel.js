const { Pool } = require('pg');
const pool = new Pool({
    connectionString: 'postgres://hqjkhjks:VRRUdlAseHb1pe3d44nquXBQ4t8zqS6E@mahmud.db.elephantsql.com/hqjkhjks'
})

// CREATE TABLE posts (
//     id SERIAL PRIMARY KEY, 
//     username VARCHAR (50) REFERENCES users (username),
//     message VARCHAR (50) NOT NULL
//     );

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR (50) UNIQUE NOT NULL,
//     password VARCHAR (50) UNIQUE NOT NULL
//     );

module.exports = {
    query: (text, params, callback) => {
        console.log('Executed Query', text);

        return pool.query(text, params, callback);
    }
}