const pg = require("pg")

async function connect(){
  if(global.connection) return global.connection.connect()

  const pool = new pg.Pool({
    connectionString:"postgres://ayskkehq:utIjjeFfNzxtfcwMQ8n5RE-_nHKcMGqt@castor.db.elephantsql.com/ayskkehq"
  })

  global.connection = pool;

  return pool.connect();

}

module.exports = {connect}