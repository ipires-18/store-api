const ProductRepository   = require('../repositories/product.repository')
const SupplierRepository   = require('../repositories/supplier.repository')

async function createProduct(product){
  
  if(await SupplierRepository.getSupplier(product.supplier_id)){
    return await ProductRepository.inserProduct(product)
  }
  throw new Error("O supplier_id não informado não existe!!!")
  
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
  if(await SupplierRepository.getSupplier(product.supplier_id)){
    return await ProductRepository.updateProduct(product)
  }

  throw new Error("O supplier_id não informado não existe!!!")

}

module.exports = {createProduct, getProducts, getProduct, deleteProduct,updateProduct}