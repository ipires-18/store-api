const ProductService = require('../services/product.service')

async function createProduct(request, response, next){
  try {
    let product = request.body

    if(!product.name || !product.description || !product.value || !product.stock || !product.supplier_id){
      throw new Error("Name, description, Phone, Email and Address are mandatory") 
    }
    
    response.send(await ProductService.createProduct(product));
    
    logger.info(`CREATE POST IN /product - ${JSON.stringify(product)}`)
  } catch (err) {
    next(err)
  }
}

async function getProducts(request, response, next){
  try {
    response.send(await ProductService.getProducts())
    logger.info(`GET IN /product`)
  } catch (err) {
    next(err)
  }
}

async function getOneProduct(request, response, next){
  try {
    response.send(await ProductService.getProduct(request.params.id))
    logger.info(`GET ONE IN /product`)
  } catch (err) {
    next(err)
  }
}

async function deleteProduct(request, response, next){
  try {
    await ProductService.deleteProduct(request.params.id)
    response.end()
    logger.info(`DELETE IN /product`)
  } catch (err) {
    next(err)
  }
}

async function upadateProduct(request, response, next){
  try {
    let product = request.body

    if(!product.product_id || !product.name || !product.description || !product.value || !product.stock || !product.supplier_id){
      throw new Error("Name, description, value, stock and supplier_id are mandatory") 
    }
    
    response.send(await ProductService.updateProduct(product));
    
    logger.info(`PUT IN /product - ${JSON.stringify(product)}`)

  } catch (err) {
    next(err)
  }
}


module.exports = {
  createProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  upadateProduct
}