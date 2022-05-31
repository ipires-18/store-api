require('dotenv').config()
const pg = require("pg")

async function connect(){
  if(global.connection) return global.connection.connect()

  const pool = new pg.Pool({
    connectionString:process.env.DBconnection
  })

  global.connection = pool;

  return pool.connect();

}

module.exports = {connect}