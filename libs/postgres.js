const { client, Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: '192.168.1.4',
    port: 5432,
    user: 'nico',
    password: 'admin',
    database: 'my_store'
  })
  await client.connect();
  return client;
};
module.exports = getConnection;
