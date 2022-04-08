// const { Pool } = require('pg');
// const db = new Pool({
//     connectionString: process.env.DB_URI
//   });

//   module.exports = db;



const { Pool } = require('pg');
const db = new Pool({
    user: 'lexllanes',
    host: 'localhost',
    database: 'recipesblog',
    password: 'hyol33ung',
    port: 5432
  });

  module.exports = db;