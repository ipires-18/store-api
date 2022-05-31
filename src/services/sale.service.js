const SalesRepository   = require('../repositories/sales.repository')
const ClientRepository = require("../repositories/client.repository")
const ProductRepository = require("../repositories/product.repository")

async function createSales(sales){
  if(!await ClientRepository.getClient(sales.client_id)){
    throw new Error("O Client_id informado não existe")
  }

  if(!await ProductRepository.getProduct(sales.product_id)){
    throw new Error("O Client_id informado não existe")
  }

  const product = await ProductRepository.getProduct(sales.product_id)

  if(!product) throw new Error("O product_id informado não existe")

  if(product.stock  > 0){
    const sale = await SalesRepository.insertSales(sales)
    product.stock--;
    await ProductRepository.updateProduct(product)
    return sale
  }else{
    throw new Error("O product informado não possui estoque")
  }
  
}

async function getByProductId(productId){

  return await SalesRepository.getByProductId(productId)
}

async function getAllSales(){
  return await SalesRepository.getAllSales()
}

async function getSale(id){
  return await SalesRepository.getSale(id)
}

async function deleteSales(id){
  const sale = await SalesRepository.getSale(id)

  if(sale){
    const product = await ProductRepository.getProduct(sale.product_id)
    await SalesRepository.deleteSales(id)
    product.stock++;
    await ProductRepository.updateProduct(product)
    
  }else {
    throw new Error("O id sale informado não existe.")
  }
}

async function updateSales(sales){
  if(!await ClientRepository.getClient(sales.client_id)){
    throw new Error("O Client_id informado não existe")
  }

  if(!await ProductRepository.getProduct(sales.product_id)){
    throw new Error("O Client_id informado não existe")
  }

  return await SalesRepository.updateSales(sales)
}

module.exports = {createSales, getAllSales, getSale,getByProductId, deleteSales,updateSales}