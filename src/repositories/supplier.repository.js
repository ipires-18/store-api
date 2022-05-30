const {connect} = require('./db')

async function inserSupplier(supplier){
  const conn = await connect();

  try {
    const rawSql = `INSERT INTO suppliers (name, cnpj, phone,email, address) VALUES($1, $2, $3, $4, $5) RETURNING *` 
    const values = [supplier.name, supplier.cnpj, supplier.phone,supplier.email,supplier.address]
  
    const response = await conn.query(rawSql,values)
  
    return response.rows[0]
    
  } catch (err) {
    throw err
  } finally{
    conn.release()
  }



} 

async function getSuppliers(){
  const conn = await connect();

  try {
    
    const response = await conn.query("SELECT * FROM suppliers")

    return response.rows
    
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function getSupplier(id){
  const conn = await connect();

  try {

   const response = await conn.query("SELECT * FROM suppliers WHERE supplier_id = $1", [id])

   return response.rows[0];

  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function updateSupplier(supplier){
  const conn = await connect();

  try {
    const rawSql = `UPDATE suppliers SET name = $1, cnpj = $2, phone = $3 ,email = $4, address = $5 WHERE supplier_id = $6 RETURNING *` 
    const values = [supplier.name, supplier.cnpj, supplier.phone, supplier.email, supplier.address, supplier.supplier_id]

    const response = await conn.query(rawSql,values)
  
    return response.rows[0]

  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function deleteSupplier(id){
  const conn = await connect();

  try {
    return await conn.query("DELETE FROM suppliers WHERE supplier_id = $1", [id])
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

module.exports = {
  inserSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier
}