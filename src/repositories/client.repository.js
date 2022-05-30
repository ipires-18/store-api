const {connect} = require('./db')

async function inserClient(client){
  const conn = await connect();

  try {
    const rawSql = `INSERT INTO clients (name, cpf, phone,email, address) VALUES($1, $2, $3, $4, $5) RETURNING *` 
    const values = [client.name, client.cpf, client.phone,client.email,client.address]
  
    const response = await conn.query(rawSql,values)
  
    return response.rows[0]
    
  } catch (err) {
    throw err
  } finally{
    conn.release()
  }



} 

async function getClients(){
  const conn = await connect();

  try {
    
    const response = await conn.query("SELECT * FROM clients")

    return response.rows
    
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function getClient(id){
  const conn = await connect();

  try {

   const response = await conn.query("SELECT * FROM clients WHERE client_id = $1", [id])

   return response.rows[0];

  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function updateClient(client){
  const conn = await connect();

  try {
    const rawSql = `UPDATE clients SET name = $1, cpf = $2, phone = $3 ,email = $4, address = $5 WHERE client_id = $6 RETURNING *` 
    const values = [client.name, client.cpf, client.phone, client.email, client.address, client.client_id]

    const response = await conn.query(rawSql,values)
  
    return response.rows[0]

  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function deleteClient(id){
  const conn = await connect();

  try {
    return await conn.query("DELETE FROM clients WHERE client_id = $1", [id])
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

module.exports = {
  inserClient,
  getClients,
  getClient,
  updateClient,
  deleteClient
}