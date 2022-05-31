const {connect} = require('./db')

async function insertSales(sale){
  const conn = await connect();

  try {
    const rawSql = `INSERT INTO sales (value, date, client_id, product_id) VALUES($1, $2, $3, $4) RETURNING *` 
    const values = [sale.value, sale.date, sale.client_id, sale.product_id]
  
    const response = await conn.query(rawSql,values)
  
    return response.rows[0]
    
  } catch (err) {
    throw err
  } finally{
    conn.release()
  }
} 

async function getByProductId(productId){
  const conn = await connect();

  try {
    const response = await conn.query("SELECT * FROM sales WHERE product_id = $1",[productId])

    return response.rows
    
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }
}

async function getAllSales(){
  const conn = await connect();

  try {
    
    const response = await conn.query("SELECT * FROM sales")

    return response.rows
    
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function getSale(id){
  const conn = await connect();

  try {

   const response = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [id])

   return response.rows[0];

  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function updateSales(sale){
  const conn = await connect();

  try {
    
    const rawSql = "UPDATE sales SET value = $1, date = $2, client_id = $3 ,product_id = $4 WHERE sale_id = $5 RETURNING *" 
    const values = [sale.value, sale.date, sale.client_id, sale.product_id, sale.sale_id]

    const response = await conn.query(rawSql,values)
  
    return response.rows[0]

  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

async function deleteSales(id){
  const conn = await connect();

  try {
    return await conn.query("DELETE FROM sales WHERE sale_id = $1", [id])
  } catch (err) {
    throw err
  }finally{
    conn.release()
  }

}

module.exports = {
  insertSales,
  getAllSales,
  getSale,
  updateSales,
  deleteSales,
  getByProductId
}