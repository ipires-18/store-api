const ProductRepository   = require('../repositories/product.repository')

async function createProduct(product){
  return await ProductRepository.inserProduct(product)
}

async function getProducts(){
  return await ProductRepository.getProducts() 
}

async function getProduct(id){
  return await ProductRepository.getProduct(id)
}

async function deleteProduct(id){
  await ProductRepository.deleteProduct(id)
}

async function updateProduct(product){
  return await ProductRepository.updateProduct(product)
}

module.exports = {createProduct, getProducts, getProduct, deleteProduct,updateProduct}