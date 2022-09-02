const { Pool } = require('pg');

const {config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.db_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;



/* Creating a new pool of connections to the database. */
const pool = new Pool({ connectionString: URI });

module.exports = pool;

// const pool = new Pool({
//   host: '192.168.1.4',
//   port: 5432,
//   user: 'nico',
//   password: 'admin',
//   database: 'my_store'
// })

